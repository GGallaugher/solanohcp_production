
<?php
$conn = pg_connect("host=localhost port=5432 dbname=solanohcp user=postgres password=Msimonpass!");

# Construct the query.  Input coordinates are SRID 900913, database
# coordinatees are 4326 (WGS_1984). This interprets input coordinates as
# 900913, transforms them to 4326, and finds any parcels whose `geom` contains
# the resulting point.
$sql = "
    SELECT parcels.longitude, parcels.latitude, parcels.apn, parcels.full_addre, parcels.remark, parcels.state, parcels.city, parcels.acres, parcels.zip FROM public.parcels WHERE
    ST_Contains(
        parcels.geom, 
        ST_Transform(
            ST_SetSRID(
                ST_MakePoint($1, $2), 900913
            ),
            4326
        )
    )ORDER BY apn;
";

$result = pg_query_params(
    $conn,
    $sql,
    # This is the $1 and $2 above.  They correspond with the URL's ?longitude=X&latitude=Y
    array($_GET['longitude'], $_GET['latitude'])
);
?>

<?php
if (!$result) {
?>

<p>A query error occurred.</p>

<?php
} else {
?>


<?php
    # For each row returned, put it in $row
    while ($row = pg_fetch_array($result)) {
?>
		<b><u>Parcel APN:  </b> <?= $row['apn'] ?></u><br><br>		
		Parcel Address:   <?=$row['full_addre']?>  <br>
		Acres:   <?= $row['acres'] ?><br>
		Assessor's Remark: <?= $row['remark']?><br>
		<?php
    } 
}
?>
