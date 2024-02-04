export async function getData(url) {
   try {
      const response = await fetch(url).then((res) => res.json());
      return response;
   } catch (err) {
      console.log(err);
   }
}
