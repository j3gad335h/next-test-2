

const BaseUrl = require("./baseUrl");
const siteUrl = BaseUrl;


module.exports ={
    siteUrl,
    generateRobotsTxt:true,
    robotsTxtOptions:{
        policies:[
            {userAgent:'*',disallow:'/<page-url>'},
        ],
    },
    exclude:['<page-url>'],
}