/*
脚本功能：什么值得买去广告
下载地址：https://apps.apple.com/cn/app/%E5%8D%97%E6%96%B9%E5%91%A8%E6%9C%AB-%E6%9C%80%E5%8F%AF%E4%BF%A1%E8%B5%96%E7%9A%84%E6%96%B0%E9%97%BB/id333953812
支持版本：商店最新 7.3.12
更新时间：2022.1.18
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*/
[rewrite_local]

^https:\/\/duckduckgo.com\/\?q=zdm\+([^&]+).+ url 302 https://search.m.smzdm.com/?v=b&s=$1
^https:\/\/homepage-api.smzdm.com\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
^https:\/\/haojia-api.smzdm.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
^https:\/\/article-api.smzdm.com\/article\/index_home_page url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js

[mitm] 

hostname = homepage-api.smzdm.com, haojia-api.smzdm.com, article-api.smzdm.com, haojia.m.smzdm.com, app-api.smzdm.com, s-api.smzdm.com