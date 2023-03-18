import Link from './Link';
import AppBar from './AppBar';
import Button from './Button';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Link(theme),
    AppBar(theme),
    Button(theme),
  );
}
