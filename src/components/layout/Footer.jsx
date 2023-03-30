function Footer() {
    const fullYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-neutral-content footer-center' >
        <div>
            <p>Copyright &copy; {fullYear} all rights reserved </p>
        </div>
    </footer>
  )
}

export default Footer