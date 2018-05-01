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


<html><head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252"></head><body>
 </style>


<?php
$conn = pg_connect("host=172.31.29.34 port=5433 dbname=solanohcp user=postgres password=Msimonpass!");
$sql= "
    SELECT *
    FROM public.newparcels
    WHERE newparcels.apn = ($1);
";
$result = pg_query_params(
    $conn,
    $sql,
	 array($_GET['apn'])
);
if (!$result) {
	echo "A query error occured.\n";
	exit;
}

date_default_timezone_set('UTC');

$script_tz = date_default_timezone_get();

if (strcmp($script_tz, ini_get('date.timezone'))){
    echo ' ';
} else {
    echo 'Script timezone and ini-set timezone match.';
}
?><center>Date/Time:
<?php
$date = date_create();
echo date_format($date, 'Y-m-d H:i:s') . "\n";?></center><br>

<?php
    # For each row returned, put it in $row
    while ($row = pg_fetch_array($result)) {
?>
							<b><p style="font-size:14px"> <?=$row['full_addre']?> </p></b> <br>
				<p class="tab">&#9679;  Parcel APN:   <?= $row['apn_dashes'] ?><br>	
		
				<p class="tab">&#9679;  Acres:   <?= $row['acres'] ?><br>
				<p class="tab">&#9679;  Assessor's Remark: <?= $row['remark']?><br>	

				<b>Habitat Plan Measures related to project design and construction that may apply:</b><br><br>
				
	<?php
if ($row['VPG_DES_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Valley Floor Grassland Natural Community</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG DES 1: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_DES_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGDES1_R']?>
</tr>



<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">VPG DES 2: Habitat Avoidance</td>
<td style="width: 50px; height: 17px; background-color: #a9dbdf;">&nbsp;<?= $row['VPG_DES_2']?>
<td style="width: 300px; height: 17px; background-color: #a9dbdf;">&nbsp;<?= $row['VPGDES2_R']?>
</tr>

	

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG DES 3: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_DES_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGDES3_R']?>
</tr>



<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">VPG DES 4: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPG_DES_4']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPGDES4_R']?>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG DES 5: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_DES_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGDES4_R']?>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">VPG CON 7: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPG_CON_7']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPGCON7_R']?>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG MIT 2: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_MIT_2']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGMIT2_R']?>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">VPG MIT 5: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPG_MIT_5']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['VPGMIT5_R']?>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SMS CON 1: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['SMS_CON_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['SMSCON1_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>




	<?php	
if ($row['VPG_DES_6'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Key Corridors</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG DES 6: Key Corridors</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_DES_6']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGDES6_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>				

			<?php	
if ($row['MIT1_1_'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Vernal Pool Conservation Areas: High</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1 Intro: PLACEHOLDER</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['MIT_1_INT']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT1INT_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">MIT 1.1</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT1_1_']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT11_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1.4</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['MIT1_4_']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT14_R']?>
</tr>


</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
			<?php	
if ($row['MIT_1_2_'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Vernal Pool Conservation Areas: Medium</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1 Intro: PLACEHOLDER</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['MIT_1_INT']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT1INT_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">MIT 1.2</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT_1_2_']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT12_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1.4</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['MIT1_4_']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT14_R']?>
</tr>


</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
	
				<?php	
if ($row['MIT1_3_'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Vernal Pool Conservation Areas: Low</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1 Intro: PLACEHOLDER</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['MIT_1_INT']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT1INT_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">MIT 1.2</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT1_3_']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['MIT13_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">MIT 1.4</td>
<td style="width: 50px; height: 17px;">&nbsp;Yes</td>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['MIT14_R']?>
</tr>


</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	
					<?php	
if ($row['VPG_MIT_3'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Contra Costa Goldfields Core Population Area</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG MIT 4: Contra Costa Goldfields Core Population Area</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_MIT_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGMIT3_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
			<?php	
if ($row['VPG_MIT_4'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;background-color: #0055b8; color:#ffffff;"><strong>California Tiger Salamander: Known Habitat</strong></td>
<td style="width: 50px; height: 17px;background-color: #0055b8; color:#ffffff;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;background-color: #0055b8; color:#ffffff;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">VPG MIT 4: Known CTS Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['VPG_MIT_4']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['VPGMIT4_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
			<?php }?>				
<?php	
if ($row['SH_MIT_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Swainson's Hawk: Irrigated Agriculture Foraging Habitat Conservation</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH MIT 1</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['SH_MIT_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['SHMIT1_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>
<?php	
if ($row['SH_MIT_2'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Swainson's Hawk: Valley Floor Grassland Foraging Habitat Conservation</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH MIT 2</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['SH_MIT_2']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['SHMIT2_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>		
<?php	
if ($row['SH_MIT_3'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Swainson's Hawk: Inner Coast Range Foraging Habitat Conservation</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH MIT 2</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['SH_MIT_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['SHMIT3_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>		
<?php	
if ($row['BO_MIT_3'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Measures that apply to Projects in Zone 1</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH MIT 5: Preservation of Important Nesting Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['SH_MIT_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['SHMIT5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">BO MIT 3: Preservation of Important Nesting Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['BO_MIT_3']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['BOMIT3_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
<?php	
if ($row['RLF_DES_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 100px; height: 17px;"><strong>Measures that apply to Projects within California Red-legged Frog Conservation Area</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF DES 1: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RLF_DES_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLFDES1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RLF DES 2: Aquatic Habitat Buffers and Corridors</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLF_DES_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLFDES2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF DES 3: Design Measures for New Roads</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RLF_DES_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLFDES3_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RLF MIT 5: Nonnative Predator Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLF_MIT_5']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLFMIT5_R']?>
</tr>
</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
<?php	
if ($row['RLF_MIT_4'] == ('May apply depending on field survey results; satisfied by RSM MIT2'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Mitigation for Impacts to Habitat Outside of the CRLF Conservation Area</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF MIT 4</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLF_MIT_4']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
	<?php }?>	
	<?php	
if ($row['RLF_CON_4'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Inner Coast Range Natural Community Measures</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF CON 4: Best Management Practices to be Implemented During O&M and Construction Activities</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RLF_CON_4']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLFCON4_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RLF MIT 1: Mitigation for Impacts to Upland Habitat in the CRLF Conservation Area</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLF_MIT_1']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLFMIT1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF MIT 2: Mitigation for Impacts to Aquatic Habitats in the CRLF Conservation Area</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RLF_MIT_2']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLFMIT2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RLF MIT 3: Mitigation for Temporary Impacts to Upland, Marsh, Pond/Aquatic, and Riparian Habitats</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLF_MIT_3']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RLFMIT3_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RLF MIT 5: Nonnative Predator Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RLF_MIT_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RLFMIT5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 3: Mitigation for the Loss or Fill of Seasonal Wetlands</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_MIT_3']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMMIT3_R']?>
</tr>
</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	
	
	
	<?php	
if ($row['CSB_DES_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Callippe Silverspot Butterfly Measures</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CSB DES 1: Site Design Standards in Core Breeding Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CSB_DES_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CSBDES1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CSB CON 2: Best Management Practices to be Implemented During O&M and Construction Activities</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CSB_CON_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CSBCON2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CSB MIT 1: Mitigation for Impacts to Non-breeding Habitat in the Callippe Silverspot Conservation Area</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CSB_MIT_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CSBMIT1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CSB MIT 2: Mitigation for Impacts to Breeding Habitat in the Callippe Silverspot Butterfly Conservation Area</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CSB_MIT_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CSBMIT2_R']?>
</tr>
</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	


	<?php	
if ($row['RSM_DES_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Riparian, Stream, and Freshwater Marsh Natural Community</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM DES 1: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_DES_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMDES1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM DES 2: Setbacks and Buffer Zones</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_DES_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMDES2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM CON 3: Riparian Tree Protection</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_CON_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMCON3_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM CON 4: Best Management Practices to be Implemented During O&M and Construction Activities</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_CON_4']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMCON4_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM CON 6: Valley Elderberry Longhorn Beetle</td>
<td style="width: 50px; height: 17px;">&nbsp;May Apply
<td style="width: 300px; height: 17px;">&nbsp;May Apply Depending on Field Survey Results
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM CON 7: Tricolored Blackbird</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;May Apply
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;May Apply Depending on Field Survey Results
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM MIT 1: Mitigation for Direct Impacts to Riparian, Stream, and Freshwater Marsh Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_MIT_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMMIT1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 2: Mitigation for the Loss or Fill of Ponds, Freshwater Marsh Habitat, and Channels</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_MIT_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMMIT2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM MIT 4: Mitigation for Temporary Impacts to Riparian, Stream, and Freshwater Marsh Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_MIT_4']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMMIT4_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 5: Base Flow</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_MIT_5']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMMIT5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM MIT 12: Elderberry Shrub Mitigation for Valley Elderberry Longhorn Beetle</td>
<td style="width: 50px; height: 17px;">&nbsp;May Apply
<td style="width: 300px; height: 17px;">&nbsp;May Apply Depending on Field Survey Results
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 13: Direct Loss or Conversion of Tricolored Blackbird Foraging Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;May Apply
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;May Apply Depending on Field Survey Results
</tr>


</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	

	<?php	
if ($row['RSM_CON_5'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Salmonid Streams</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM CON 5 for Salmonids</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_CON_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMCON5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 11: New Stream Crossings</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_MIT_11']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMMIT11_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	

	<?php	
if ($row['RSM_MIT_6'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Priority Watersheds</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM MIT 6: Development in Watersheds of Priority Drainages</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['RSM_MIT_6']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['RSMMIT6_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">RSM MIT 7: Restoring Naturalized Channel Processes</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSM_MIT_7']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['RSMMIT7_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	
	<?php	
if ($row['GGS_CON_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Giant Garter Snake Conservation Area</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">GGS CON 1: Timing of Work</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['GGS_CON_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['GGSCON1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">GGS CON 2: Best Management Practices to be Implemented During O&M and Construction Activities</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['GGS_CON_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['GGSCON2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">GGS MIT 1: O&M Habitat Mitigation</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['GGS_MIT_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['GGSMIT1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">GGS MIT 2: Mitigation for Direct and Indirect Impacts to Giant Garter Snake Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['GGS_MIT_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['GGSMIT2_R']?>
</tr>

</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	
		
	<?php	
if ($row['CM_DES_1'] == ('Yes'))  {?>
<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Coastal Marsh Natural Community</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM DES 1: Habitat Avoidance</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_DES_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMDES1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM DES 2: Buffers</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_DES_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMDES2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM CON 3: Best Management Practices to be Implemented During O&M and Construction Activities</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_CON_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMCON3_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM CON 4: Use of Riprap</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_CON_4']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMCON4_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM CON 5: Soft Bird’s-beak and Suisun Thistle</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_CON_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMCON5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM CON 6: Salt Marsh Harvest Mouse</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_CON_6']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMCON6_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM CON 7: Delta Smelt, Longfin Smelt, North American Green Sturgeon Southern Distinct Population Segment (DPS), and Sacramento Splittail</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_CON_7']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMCON7_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM CON 8: California Clapper Rail, California Black Rail, Suisun Song Sparrow</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_CON_8']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMCON8_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM MIT 1: Mitigation for Direct Impacts to Marsh Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_MIT_1']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMMIT1_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM MIT 2: Mitigation for Indirect Impacts to Marsh Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_MIT_2']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMMIT2_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM MIT 3: Mitigation for Direct Impacts to Shallow Water Habitat</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_MIT_3']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMMIT3_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM MIT 4: Mitigation for Temporary Impacts to Marsh Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_MIT_4']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMMIT4_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM MIT 5: Dry Season Nuisance Flows</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_MIT_5']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMMIT5_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM MIT 6: Invasive Species, Water Quality Control, Species Introduction, and Barrier Removal Enhancement Program</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_MIT_6']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMMIT6_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">CM MIT 7: Covered Plant Species Salvage and Recovery</td>
<td style="width: 50px; height: 17px;">&nbsp;<?= $row['CM_MIT_7']?>
<td style="width: 300px; height: 17px;">&nbsp;<?= $row['CMMIT7_R']?>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">CM MIT 8: Mitigation for Delta Smelt and Sacramento Splittail Habitat</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CM_MIT_8']?>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">&nbsp;<?= $row['CMMIT8_R']?>
</tr>
</tbody>
</table>
<!-- DivTable.com -->
<p>&nbsp;</p>
<?php }?>	



<body>

<table style="height: 50px; width: 700px; border-color: #0055b8; background-color: #f5f4ec;" border="0">
<tbody>
<tr style="height: 17px; background-color: #0055b8; color:#ffffff;">
<td style="width: 150px; height: 17px;"><strong>Conditions that Apply to all Projects</strong></td>
<td style="width: 50px; height: 17px;"><strong>Applicable</strong></td>
<td style="width: 300px; height: 17px;"><strong>Applicable Reason</strong></td>

</tr>


<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH DES 1: Tree Nest Protection</td>
<td style="width: 50px; height: 17px;">Yes</td>
<td style="width: 300px; height: 17px;">Applies to all projects</td>
</tr>

<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">SH DES 2: Solano Irrigation District (SID) Annexations</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">Applies if project is in a SID annexation</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH CON 3: Preconstruction Nest Surveys</td>
<td style="width: 50px; height: 17px;">Yes</td>
<td style="width: 300px; height: 17px;">Applies to all projects</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">SH CON 4: Active Nest Buffers</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SH CON 5: Post-Construction Occupied Nest Avoidance</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">SH MIT 4: Known Nest Trees</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">BO CON 1: Preconstruction Surveys</td>
<td style="width: 50px; height: 17px;">Yes</td>
<td style="width: 300px; height: 17px;">Applies to all projects</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">BO CON 2: Vegetation Management</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">BO CON 3: Construction Buffers and Exclusion</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">BO CON 4: Active Relocation</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply </td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">BO MIT 1: Mitigation for Direct and Indirect Impacts to Foraging Habitat</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">BO MIT 2: Known Nest Sites</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">BO MIT 4: Mitigation for Temporary Impacts</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">BO MIT 4: Mitigation for Temporary Impacts</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">RSM MIT 9: Storm Water Discharge</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">Applies if Municipal Plan Participant Project</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">GGS MIT 3:Invasive Species, Water Quality Control, Species Introduction, and Barrier Removal Enhancement Program</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply </td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;">SMS CON 2: Buffer Zones</td>
<td style="width: 50px; height: 17px;">May Apply</td>
<td style="width: 300px; height: 17px;">May Apply Depending on Field Survey Results</td>
</tr>
<tr style="height: 17px;">
<td style="width: 150px; height: 17px;background-color: #a9dbdf;">SMS CON 4: Minimize Impacts to Foothill Yellow-Legged Frogs and Western Pond Turtles</td>
<td style="width: 50px; height: 17px;background-color: #a9dbdf;">May Apply</td>
<td style="width: 300px; height: 17px;background-color: #a9dbdf;">May Apply Depending on Field Survey Results</td>
</tr>

</BODY>
</html>
<?php } ?>
