import Image from "next/image"

const Logo = () => {
      return (
            <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-full"
                  priority
            />
      )
}

export default Logo