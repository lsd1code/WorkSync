const Error = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-[4px] border text-center border-red-600 rounded-sm py-2 px-4 text-red-500 shadow-md text-[.8rem]">
      {children}
    </div>
  )
}

export default Error