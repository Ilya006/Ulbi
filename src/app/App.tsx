import { useTheme } from '~/app/providers/ThemeProvider';
import { Navbar } from '~/widget/Navbar';
import { Sidebar } from '~/widget/Sidebar';
import { classNames } from '~/shared/lib/classNames';

import { AppRoute } from './providers/route';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
