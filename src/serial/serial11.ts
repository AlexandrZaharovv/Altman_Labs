/* 
	Реализовать функцию getAllUserEmails(xmlDoc), которая принимает XML-документ xmlDoc и возвращает массив email-адресов всех пользователей в нем.

	Пример XML:
<users>
  <user id="1">
    <personalInfo>
      <email>alice@example.com</email>
      <phone>+123456789</phone>
    </personalInfo>
  </user>
  <user id="2">
    <personalInfo>
      <email>bob@example.com</email>
      <phone>+987654321</phone>
    </personalInfo>
  </user>
</users>	
*/


export interface User {
  id: string;
  personalInfo: {
    email: string;
    phone: string;
  };
}

export function getAllUserEmails(xmlDoc: Document): string[] {
  const users = Array.from(xmlDoc.getElementsByTagName("user"));
  
  return users.map((user) => {
    const email = user.getElementsByTagName("email")[0];
    return email?.textContent?.trim() || "";
  }).filter((email) => email !== "");

}