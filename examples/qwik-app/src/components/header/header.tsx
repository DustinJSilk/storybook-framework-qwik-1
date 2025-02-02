import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export type HeaderProps = { title: string };
export const Header = component$(({ title }: HeaderProps) => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" aria-label="Qwik Logo" target="_blank">
          <QwikLogo />
        </a>
      </div>
      {title ? <h1 style={{ paddingTop: '4px' }}>{title}</h1> : null}
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
