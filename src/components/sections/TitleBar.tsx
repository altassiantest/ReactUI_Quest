interface TitleBarProps {
  title: string;
}

export function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="bg-brand-headerBg text-white px-4 py-2.5 text-base font-semibold">
      {title}
    </div>
  );
}
