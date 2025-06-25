import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'



const footerLinks = [
  {
    title: 'LinkdIn',
    href: '#'
  },
  {
    title: 'Instagram',
    href: '#'
  },
  {
    title: 'Twitter',
    href: '#'
  },
]



export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2025. All rights reserved</div>
          <nav className='flex flex-colmd:flex-row items-center gap-8'> 
            {footerLinks.map((link , index)=> (
              <a href={link.href} key={index} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
};
