type modsProps = {
  mods: Record<string, boolean | string>;
};

export function classNames(cls: string, mods: modsProps, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => value)
      .map(([className]) => className),
  ].join(' ');
}
