<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: text/xml');
include 'api/db.php';
include 'config.php';
$dbhost = $config['db']['host'];
$dbuser = $config['db']['user'];
$dbpass = $config['db']['pass'];
$dbname = $config['db']['db_name'];
$db = new db($dbhost, $dbuser, $dbpass, $dbname);

$result = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
$result .= "<url><loc>https://www.asokalaw.vn</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/tam-nhin-su-menh</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/co-hoi-nghe-nghiep</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/khoi-tao-doanh-nghiep</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/doanh-nghiep-duoi-3-nam</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/doanh-nghiep-tren-3-nam</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/dang-ky-nhan-hieu</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/dang-ky-kinh-doanh</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/dang-ky-dau-tu</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/phap-ly-thuong-xuyen</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/tu-van-luat-su</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/phap-ly-su-kien</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/giai-quyet-tranh-chap</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/cau-hoi-thuong-gap</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/chinh-sach-khach-hang</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/quy-trinh-lam-viec</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/huong-dan-thanh-toan</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/lien-he</loc></url>";

$result .= "<url><loc>https://www.asokalaw.vn/vision-mission</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/careers</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/business-establishment</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/business-under-3-years</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/business-over-3-years</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/trademark-registration</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/business-registration</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/investment-registration</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/regular-legal-service</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/lawyer-consultation</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/event-related-legal-service</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/dispute-resolution</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/faq</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/terms-of-use</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/working-process</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/payment-terms</loc></url>";
$result .= "<url><loc>https://www.asokalaw.vn/contact-us</loc></url>";

$data = array();
$data = $db->query("select * from category")->fetchAll();
foreach ($data as $item) {
    $result .= "<url><loc>https://www.asokalaw.vn/category/{$item['en_slug']}</loc></url>";
    $result .= "<url><loc>https://www.asokalaw.vn/danh-muc/{$item['slug']}</loc></url>";
}

$data = array();
$data = $db->query("select * from post")->fetchAll();
foreach ($data as $item) {
    if (!$item['is_publish']) continue;
    if (!$item['is_english_only']) $result .= "<url><loc>https://www.asokalaw.vn/{$item['en_slug']}</loc></url>";
    if (!$item['is_vi_only']) $result .= "<url><loc>https://www.asokalaw.vn/{$item['slug']}</loc></url>";
}

$result .= '</urlset>';

ob_clean();
echo $result;
