import { useId, type KeyboardEvent, type ReactNode } from 'react';

interface FieldProps {
  /** Equation terms this control feeds; highlighted when one of them is active. */
  terms?: string[];
  activeTerm?: string | null;
  onTermEnter?: (t: string | null) => void;
  children: ReactNode;
  className?: string;
}

/** Wraps a control so it lights up when its equation term is hovered, and vice versa. */
export function Field({ terms, activeTerm, onTermEnter, children, className = '' }: FieldProps) {
  const linked = !!terms && !!activeTerm && terms.includes(activeTerm);
  return (
    <div
      className={`field ${linked ? 'is-linked' : ''} ${className}`}
      data-terms={terms?.join(' ')}
      onMouseEnter={() => terms && onTermEnter?.(terms[0])}
      onMouseLeave={() => terms && onTermEnter?.(null)}
      onFocusCapture={() => terms && onTermEnter?.(terms[0])}
      onBlurCapture={() => terms && onTermEnter?.(null)}
    >
      {children}
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  format?: (v: number) => string;
  low?: string;
  high?: string;
  hint?: string;
  /** Hex or CSS color for the filled track. */
  tone?: string;
}

export function Slider({ label, value, onChange, min = 0, max = 1, step = 0.01, format, low, high, hint, tone }: SliderProps) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  const shown = format ? format(value) : value.toFixed(2);
  return (
    <div className="slider">
      <div className="slider-head">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id} className="mono">
          {shown}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ['--pct' as string]: `${pct}%`, ['--tone' as string]: tone }}
        aria-valuetext={shown}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      {(low || high) && (
        <div className="slider-ends" aria-hidden="true">
          <span>{low}</span>
          <span>{high}</span>
        </div>
      )}
      {hint && <p className="hint">{hint}</p>}
    </div>
  );
}

interface SegmentedProps<T extends string> {
  label: string;
  value: T;
  options: { value: T; label: string; hint?: string }[];
  onChange: (v: T) => void;
  hideLabel?: boolean;
}

export function Segmented<T extends string>({ label, value, options, onChange, hideLabel }: SegmentedProps<T>) {
  const id = useId();
  const onKey = (e: KeyboardEvent) => {
    const i = options.findIndex((o) => o.value === value);
    let n = i;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % options.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + options.length) % options.length;
    else return;
    e.preventDefault();
    onChange(options[n].value);
    const group = (e.currentTarget as HTMLElement).closest('[role="radiogroup"]');
    requestAnimationFrame(() => (group?.querySelectorAll<HTMLElement>('[role="radio"]')[n])?.focus());
  };
  return (
    <div className="segmented-wrap">
      <span id={id} className={hideLabel ? 'sr-only' : 'control-label'}>
        {label}
      </span>
      <div className="segmented" role="radiogroup" aria-labelledby={id}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            tabIndex={o.value === value ? 0 : -1}
            className={o.value === value ? 'on' : ''}
            title={o.hint}
            onClick={() => onChange(o.value)}
            onKeyDown={onKey}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
  tone?: string;
}

export function Switch({ label, checked, onChange, hint, tone }: SwitchProps) {
  const id = useId();
  return (
    <div className="switch-row" style={{ ['--tone' as string]: tone }}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        className={`switch ${checked ? 'on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="switch-knob" />
      </button>
      <label htmlFor={id}>
        {label}
        {hint && <span className="hint block">{hint}</span>}
      </label>
    </div>
  );
}

interface ChipProps {
  label: string;
  pressed: boolean;
  onToggle: () => void;
  disabled?: boolean;
  sample?: ReactNode;
  title?: string;
}

/** A pressable chip with an explicit check mark, so state never relies on color. */
export function ToggleChip({ label, pressed, onToggle, disabled, sample, title }: ChipProps) {
  return (
    <button
      type="button"
      className={`chip ${pressed ? 'on' : ''}`}
      aria-pressed={pressed}
      disabled={disabled}
      title={title}
      onClick={onToggle}
    >
      <span className="chip-mark" aria-hidden="true">
        {pressed ? '\u2713' : ''}
      </span>
      {sample}
      <span>{label}</span>
    </button>
  );
}
