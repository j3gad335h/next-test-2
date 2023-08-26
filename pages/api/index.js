// import Axios from 'axios'
// import BaseUrl from '../../baseUrl';
// import { useRouter } from 'next/router';
// import { getServerSideSitemap } from 'next-sitemap';
// export async function getServerSideSitemap(context){
//     const {locale}=useRouter()
//     const response =await Axios.get(
//         'base_url/<data>',
//     );
//     const  data =await response?.data;
//     const fields =data?.map((item)=>({
//         loc:`${BaseUrl}/${locale}/${item?.url}`,
//         lastmodi:new Date().toISOString()
//     }))
//     return getServerSideSitemap (context,fields);
// }
// export default function Site(){}