import { useTheme } from '~/shared/lib/hooks';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return <div onClick={toggleTheme}>Home</div>;
}
