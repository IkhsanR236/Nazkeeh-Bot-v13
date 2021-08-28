# Nazkeeh Bot

<?php
include 'class.discord.php';

$discord = new Discord("777879080011038751");
$discord->fetch();

$server_title = $discord->getServerTitle();
$channel_list = $discord->getChannels();
$member_list = $discord->getMembers();
$member_count = $discord->getMemberCount();
