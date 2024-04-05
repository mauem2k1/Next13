import Image from "next/image" //import image để thêm được ảnh

export default function Home() {
  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100

      " // phần này để tạo nền page
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md"> 
        <Image
          alt="Logo" // phần div này để css lại logo
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png" 
        />
        <h2
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-gray-900
          " // Css cho dòng chữ của lớp h2
        >
          Sign in to your account
        </h2>
      </div>
    </div>
  );
}