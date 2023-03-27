import { Fade } from 'react-awesome-reveal';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Reveal({ children }: Props) {
  return (
    <Fade triggerOnce duration={700} cascade damping={0.25}>
      {children}
    </Fade>
  );
}
