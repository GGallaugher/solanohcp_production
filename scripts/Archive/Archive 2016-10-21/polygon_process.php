<style type="text/css">
 <!--
.tab { margin-left: 40px; }
 -->
.button {
  background: #0055b8;
  background-image: -webkit-linear-gradient(top, #0055b8, #0055b8);
  background-image: -moz-linear-gradient(top, #0055b8, #0055b8);
  background-image: -ms-linear-gradient(top, #0055b8, #0055b8);
  background-image: -o-linear-gradient(top, #0055b8, #0055b8);
  background-image: linear-gradient(to bottom, #0055b8, #0055b8);
  -webkit-border-radius: 1;
  -moz-border-radius: 1;
  border-radius: 1px;
  font-family: Arial;
  color: #ffffff;
  font-size: 10px;
  padding: 5px 5px 5px 5px;
  text-decoration: none;
}

.button:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}

 </style>



<?php   
$conn = pg_connect("host=172.31.29.34 port=5433 dbname=solanohcp user=postgres password=Msimonpass!");

# TODO: replace "SELECT *" with the columns you want, and don't select from 
# parcels, select from whatever table you're actually interested in 
# querying
$sql = "
    SELECT *
    FROM public.parcels
    WHERE ST_Intersects(
        ST_Transform(
            ST_GeomFromEWKT($1),
            4326
        ),
        geom
    );
";

# $_GET['poly'] is a string that looks something like:
#   'POLYGON((123.123 456.456,223.223 456.456,323.323 456.456))'
# 
# PostGIS's ST_GeomFromEWKT() function takes almost that exact string, but needs 
# the SRID too, so the resulting format looks like:
#
#   'SRID=900913;POLYGON((...))'
#
# So this constructs the actual string we send to ST_GeomFromEWKT().
$poly_string_with_srid = 'SRID=900913;' . $_GET['poly'];

$result = pg_query_params(
    $conn,
    $sql,
    array($poly_string_with_srid)
);

if (!$result) {
	echo "A query error occured.\n";
	exit;
}

# TODO: actually do something with each row.  We just count the rows here.
$count = 0;

while ($row = pg_fetch_array($result)) {

?>
							<b><p style="font-size:14px"> <?=$row['full_addre']?> </p></b> <br>
				<p class="tab">&#9679;  Parcel APN:   <?= $row['apn_dashes'] ?><br>	
		
				<p class="tab">&#9679;  Acres:   <?= $row['acres'] ?><br>
				<p class="tab">&#9679;  Assessor's Remark: <?= $row['remark']?><br>	
				<p class="tab">&#9679;  HCP Zone: <?=$row['z']?><br><br></p>
				<b>Habitat Plan Measures related to project design and construction that may apply:</b><br><br>
				
<table style="height: 270px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 400px; height: 17px;"><strong>Habitat Plan Measure</strong></td>
<td style="width: 45px; height: 17px;"><strong>Applicable</strong></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">&nbsp;Giant Garter Snake Construction 1 (GGS CON1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['ggs_con_1']?></td>
</tr>

<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px; background-color: #a9dbdf;">Coastal Marsh Natural Community Construction 3 (CM CON 3)</td>
<td style="width: 45px; height: 17px; background-color: #a9dbdf;">&nbsp;<?= $row['cm_con_3']?></td>
</tr>
<tr style="height: 17px">
<td style="width: 400px; height: 17px">Coastal Marsh Natural Community Construction 4 (CM CON 4)</td>
<td style="width: 45px; height: 17px">&nbsp;<?= $row['cm_con_4']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">Coastal Marsh Natural Community Construction 5 (CM CON 5)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_con_5']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Coastal Marsh Natural Community Construction 8 (CM CON 8)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_con_8']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">Coastal Marsh Natural Community Design 1 (CM DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_des_1']?></td>
</tr>

<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Coastal Marsh Natural Community Design 2 (CM DES 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_des_2']?></td>
</tr>

<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">&nbsp;California Red-legged Frog Construction 4 (RLF CON 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rlf_con_4']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">&nbsp;Riparian, Stream, and Marsh Natural Community Construction 5 (RSM CON 5)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_con_5']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">&nbsp;Swainsons Hawk Design 1 (SH DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sh_des_1']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">&nbsp;Special Management Species Construction 4 (SMS CON 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sms_con_4']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">Special Management Species Design 1 (SMS DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sms_des_1']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 1 (VPG DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_1']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 2 (VPG DES 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_2']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 3 (VPG DES 3)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_3']?></td>
</tr>
<tr style="height: 17px; background-color: #a9dbdf;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 4 (VPG DES 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_4']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 6 (VPG DES 6)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_6']?></td>
</tr>
</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
				
				
				
<a class ="button" href= "<?= $row['reportlink']?>"target="_blank" align='right'>View and Print these Measures</a><br><br>	

				
<b>Habitat Plan Measures related to project design and construction that may apply<br> (Further information or Survey Needed)</b><br><br>	
				
<table style="height: 270px; width: 700px; border-color: #dcd9e0;" border="0">
<tbody>


<tr style="height: 17px; background-color: #585659; color:#ffffff;">
<td style="width: 400px; height: 17px;"><strong>Habitat Plan Measure</td>
<td style="width: 45px; height: 17px;"><strong>Applicable</strong></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Coastal Marsh Construction 5 (CM CON 5)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_con_56']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px; background-color: #dcd9e0;">Coastal Marsh Construction 7 (CM CON 7)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['cm_con_7']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Callipe Silverspot Butterfly Design 1 (CSB DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['csb_des_1']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Giant Garter Snake Construction 2 (GGS CON 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['ggs_con_2']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">California Red-Legged Frog Design 1 (RLF DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rlf_des_1']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">California Red-Legged Frog Design 2 (RLF DES 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rlf_des_2']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">California Red-Legged Frog Design 3 (RLF DES 3)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rlf_des_3']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Riparian, Stream, and Freshwater Marsh Construction 4 (RSM CON 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_con_4']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Riparian, Stream, and Freshwater Marsh Construction 6 (RSM CON 6)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_con_6']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Riparian, Stream, and Freshwater Marsh Construction 7 (RSM CON 7)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_con_7']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Riparian, Stream, and Freshwater Marsh Design 1 (RSM DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_des_1']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Riparian, Stream, and Freshwater Marsh Design 2 (RSM DES 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['rsm_des_2']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Swainson's Hawk Design 1 (SH DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sh_des_12']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Special Management Species Construction 3 (SMS CON 3)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sms_con_3']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Special Management Species Construction 4 (SMS CON 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['sms_con_45']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 1 (VPG DES 1)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_12']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 2 (VPG DES 2)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_23']?></td>
</tr>
<tr style="height: 17px; background-color: #dcd9e0;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 3 (VPG DES 3)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_34']?></td>
</tr>
<tr style="height: 17px;">
<td style="width: 400px; height: 17px;">Valley Floor Grassland and Vernal Pool Natural Community Design 4 (VPG DES 4)</td>
<td style="width: 45px; height: 17px;">&nbsp;<?= $row['vpg_des_45']?></td>
</tr>
</tbody>
</table>
<br><Br><a href="http://solanohcp.com/documents/HCP_Compliance_Checklist.pdf" target="_blank">Link to all HCP Measures</a>
______________________________________________________________________________________________________________________________________________________<br><br>
		<?php 
    } 

?>
<body>
</html>
<body>
</html>
