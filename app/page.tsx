import { promises as fs} from "fs"
export default function Home() {

  async function action(formData: FormData){
    "use server"
    const file = formData.get("file") as File 
    if(!file || file.size === 0)  {
      console.log("no file uploaded")
      return { error: "No File Uploaded"}
    }
    const data = await file.arrayBuffer();
    await fs.writeFile(`${process.cwd()}/tmp/${file.name}`,Buffer.from(data))
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
