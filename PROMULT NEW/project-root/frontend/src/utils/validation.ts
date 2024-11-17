export const validateShopifyUrl = (url: string): boolean => {
   const shopifyUrlRegex = /^[a-zA-Z0-9-]+\.myshopify\.com$/;
   return shopifyUrlRegex.test(url);
 };
 
 export const validateAmazonCredentials = (credentials: {
   accessKey: string;
   secretKey: string;
 }): boolean => {
   return credentials.accessKey.length > 0 && credentials.secretKey.length > 0;
 };