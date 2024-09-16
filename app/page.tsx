import Image from "next/image";

export default function Home() {

  async function action(formData: FormData){
    "use server"
    const file = formData.get("file") as File 
    console.log(file)
  }
  return (
    <div className="min-h-[100vh] flex justify-center items-center p-5 bg-gray-500">
      <form action={action} className="flex flex-col gap-4 bg-white p-5 rounded-full">
        <input type="file" name="file" accept=".pdf" />
        <button type="submit" className="py-4 px-2 bg-black text-white rounded">Upload</button>
      </form>
    </div>
  );
}
