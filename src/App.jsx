import { useEffect, useState } from 'react'
import './App.scss'
import Dashboard from './components/dashboard/Dashboard'
import Product from './components/product/Product'
import MenuBurger from './components/menu-burger/MenuBurger';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollLock } from './hooks/useScrollLock';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    function checkViewport() {
      if (window.innerWidth < 1025) {
        setIsMobile(true)
      } else setIsMobile(false);
    }

    checkViewport();
    window.addEventListener('resize', () => checkViewport());
  }, []);

  const mobileDashboard =
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div className='mobile-dashboard'
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}

          onClick={(e) => {
            if (!e.target.closest('.mobile-dashboard__dashboard')) setIsMenuOpen(false);
          }}
        >
          <motion.div className="mobile-dashboard__dashboard"
            initial={{ x: '-100%' }}
            animate={{ x: 0, }}
            exit={{ x: '-100%' }}

            transition={{ type: 'tween' }}

          >
            <Dashboard />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

  return (
    <div className='wrapper'>
      <div className="wrapper__dashboard">
        {!isMobile ? <Dashboard /> : mobileDashboard}
      </div>

      <main className="wrapper__content">
        <header className='header'>
          <h2>Hello Evano 👋🏼,</h2>

          {isMobile && <MenuBurger isOpen={isMenuOpen} onClickHandler={() => setIsMenuOpen(!isMenuOpen)} />}
        </header>

        <Product />

      </main>

    </div>
  )
}

export default App
