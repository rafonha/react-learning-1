export default function Header({pageTitle}) {
  return(
    <header className="bg-green-300 mx-auto  p-4">
        <h1 className="text-center font-semibold text-xl">{pageTitle}</h1>
    </header>
  ) 
  ;
}
