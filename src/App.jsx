import { Dithering } from '@paper-design/shaders-react'

const PROFILE_IMG =
  'https://app.paper.design/file-assets/01M0ZCWRABMKAS0XC2QEV4E5GJ/2Z8V6M8TTJV7R3EZJ53GHJNCB8.jpg'

function WifiIcon() {
  return (
    <svg viewBox="0 0 16.67 12.5" width="17" height="13" fill="none">
      <path
        d="M8.333 12.5M0 3.183C2.292 1.133 5.259 0 8.333 0c3.075 0 6.042 1.133 8.334 3.183M2.5 6.549c1.558-1.527 3.652-2.382 5.833-2.382s4.276.855 5.834 2.382M5.417 9.524c.779-.764 1.826-1.191 2.916-1.191s2.138.427 2.917 1.191"
        stroke="var(--color-blue)"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 16.67 10" width="17" height="10" fill="none">
      <path
        d="M6.667 6.667V3.333M16.667 6.667V3.333M3.333 6.667V3.333M1.667 0h10c.92 0 1.666.746 1.666 1.667v6.666c0 .92-.746 1.667-1.666 1.667H1.667C.747 10 0 9.254 0 8.333V1.667C0 .747.747 0 1.667 0Z"
        stroke="var(--color-green)"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Chevron() {
  return (
    <svg viewBox="0 0 5 10" width="5" height="10" fill="none">
      <path
        d="M0 10 5 5 0 0"
        stroke="var(--color-text-tertiary)"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 16 14.46" width="16" height="14">
      <path
        d="M12.594 0h2.442L9.703 6.137 16 14.458h-4.948l-3.855-5.044-4.434 5.044H.321L6.04 7.904 0 0h5.076l3.502 4.627L12.594 0Zm-1.62 12.98h1.35L4.337 1.382H2.859l8.115 11.598Z"
        fill="var(--color-text-secondary)"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 16 15.84" width="16" height="16">
      <path
        d="M13.633 13.498h-2.371V9.822c0-.876-.016-2.005-1.233-2.005-.894 0-1.424.955-1.424 1.941v3.74H6.235V5.939h2.276v1.033h.031c.228-.386.559-.703.955-.918.395-.215.841-.32 1.293-.321 2.403 0 2.846 1.565 2.846 3.6l-.003 4.165ZM3.56 4.905c-.272 0-.538-.079-.765-.229a1.42 1.42 0 0 1-.506-.611 1.42 1.42 0 0 1-.079-.787c.053-.265.184-.507.377-.698.192-.19.437-.32.704-.373.267-.052.544-.026.796.078.251.103.466.277.617.501.151.224.232.487.232.758 0 .179-.035.356-.104.521a1.42 1.42 0 0 1-.299.442 1.42 1.42 0 0 1-.454.304c-.167.068-.346.103-.527.103Zm2.373 8.593H2.372V5.939h2.373l-.812 7.559ZM14.815.001H1.181c-.31-.003-.608.118-.829.331a1.16 1.16 0 0 0-.351.812v13.555c.004.306.132.599.351.813.221.214.519.333.83.33h13.633c.31.004.609-.115.831-.329.222-.214.35-.507.354-.813V1.142c-.004-.307-.132-.6-.354-.814a1.16 1.16 0 0 0-.831-.329Z"
        fill="var(--color-text-secondary)"
      />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 16 10.6" width="16" height="11" fill="none">
      <g fill="var(--color-text-secondary)">
        <path d="M4.636 0c.435 0 .87.042 1.284.125.352.083.683.228.993.435.269.208.497.477.642.788.166.395.248.81.228 1.223.02.456-.104.912-.332 1.306-.248.374-.6.664-.993.85.556.145 1.032.498 1.345 1.04.311.497.456 1.078.456 1.658 0 .477-.083.933-.29 1.348-.186.373-.455.684-.766.954-.331.248-.724.435-1.118.539-.414.124-.848.165-1.283.165H0V0h4.636Zm-.29 4.187c.332.021.684-.083.953-.29.269-.228.414-.58.373-1.015 0-.207-.04-.414-.124-.601-.083-.145-.186-.269-.331-.352-.145-.083-.31-.166-.476-.187-.186-.041-.373-.041-.56-.041H2.153v2.425l2.194.061Zm.125 4.437c.207 0 .414-.02.621-.062.186-.041.352-.124.518-.228.145-.103.269-.248.352-.414.104-.207.145-.435.124-.663.041-.435-.124-.85-.435-1.139-.331-.248-.724-.352-1.139-.331H2.153v2.86l2.318-.023Z" />
      </g>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 13.33 10.67" width="14" height="11" fill="none">
      <path
        d="M13.333 2 7.34 5.818a1.5 1.5 0 0 1-1.34 0L0 2M1.333 0h10.667c.736 0 1.333.597 1.333 1.333v8c0 .737-.597 1.334-1.333 1.334H1.333C.597 10.667 0 10.07 0 9.333v-8C0 .597.597 0 1.333 0Z"
        stroke="var(--color-text-secondary)"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-0)] flex justify-center">
      <div className="w-[720px] max-w-full flex flex-col border-l border-r border-solid border-[var(--color-border-strong)]">
        {/* ── Status header ── */}
        <header className="flex items-center justify-end px-4 py-3 gap-6 bg-[var(--color-bg-1)]">
          <p className="grow min-w-0 font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-tertiary)]">
            Last updated:Aug 28
          </p>
          <div className="flex items-center gap-3">
            <span className="flex size-5 items-center justify-center">
              <WifiIcon />
            </span>
            <span className="flex size-5 items-center justify-center">
              <BatteryIcon />
            </span>
          </div>
          <p className="font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-tertiary)]">
            10:PM,MON
          </p>
        </header>

        {/* ── Hero dither ── */}
        <div className="border border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)]">
          <Dithering
            speed={0.51}
            shape="warp"
            type="4x4"
            size={1.5}
            scale={0.51}
            frame={1244630.11}
            colorBack="#00000000"
            colorFront="#483604"
            className="h-[200px] w-full"
          />
        </div>

        {/* ── Profile ── */}
        <section className="flex flex-col items-start gap-4 px-8 py-16 bg-[var(--color-bg-0)]">
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <div className="size-12 overflow-hidden rounded-[9.6px]">
              <img
                src={PROFILE_IMG}
                alt="Sundar Basnet"
                className="size-12 object-cover"
                style={{ objectPosition: '50.72% 15.13%' }}
              />
            </div>
            <div className="flex flex-col self-stretch">
              <h1 className="font-[var(--font-main)] font-[var(--font-weight-medium)] text-[var(--text-16)] leading-[var(--leading-16)] tracking-[-0.01em] text-[var(--color-text-primary)]">
                Sundar Basnet
              </h1>
              <p className="font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                Product Designer
              </p>
            </div>
          </div>
          <p className="font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
            Currently working as UX/UX designer at Codavatar, primarily focusing
            on WebApp for Dialaxy and Startup ‘Airchannel.
          </p>
        </section>

        {/* ── Work + Experiments ── */}
        <section className="flex flex-col gap-6 border border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)] pt-16 pb-20">
          <div className="flex items-center justify-center px-8">
            <h2 className="grow font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
              \Work + Experiments
            </h2>
          </div>
          <div
            className="flex flex-col gap-4 border-y border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)] p-6"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, transparent 0px, transparent 6px, rgba(255, 255, 255, 0.055) 6px, rgba(255, 255, 255, 0.055) 7px)',
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[376.88px] shrink-0 self-stretch overflow-hidden rounded-[16px] bg-[var(--color-bg-2)]"
              />
            ))}
          </div>
        </section>

        {/* ── Experience / About ── */}
        <section className="flex flex-col overflow-clip bg-[var(--color-bg-0)] py-20">
          <div className="flex items-start px-5">
            <div className="flex items-center gap-2 rounded-t-[12px] border-x border-t border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-2)] px-6 py-2 drop-shadow-[-2px_-4px_6px_#00000033]">
              <span className="font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-primary)]">
                \Experience
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-t-[12px] border-x border-t border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-1)] px-6 py-2 drop-shadow-[-2px_-4px_6px_#00000033]">
              <span className="font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-tertiary)]">
                \About
              </span>
            </div>
          </div>

          <div className="mx-0 flex flex-col self-stretch rounded-[16px] bg-[var(--color-bg-2)] p-4 shadow-[inset_0_0_20px_#00000040] outline-1 outline-solid outline-[var(--color-border-soft)]">
            {/* item 1 */}
            <div className="flex items-end gap-4 overflow-clip rounded-t-[12px] px-3 py-5">
              <div className="size-12 shrink-0 rounded-[8px] bg-[var(--color-bg-0)] shadow-[inset_0_0_20px_#00000040]" />
              <div className="flex min-w-0 grow items-center gap-4">
                <div className="flex min-w-0 grow flex-col">
                  <p className="font-[var(--font-main)] font-[var(--font-weight-medium)] text-[var(--text-16)] leading-[var(--leading-16)] tracking-[-0.01em] text-[var(--color-text-primary)]">
                    Associate UI/UX Designer
                  </p>
                  <p className="font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                    Codavatar pvt
                  </p>
                </div>
                <p className="shrink-0 font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                  May 2025-May 2026
                </p>
                <span className="flex size-5 shrink-0 items-center justify-center">
                  <Chevron />
                </span>
              </div>
            </div>

            <svg viewBox="0 0 686 1" className="h-px w-full shrink-0">
              <path
                d="M0 0h686"
                stroke="var(--color-border-soft)"
                strokeDasharray="4 4"
              />
            </svg>

            {/* item 2 */}
            <div className="flex items-end gap-4 overflow-clip rounded-b-[12px] px-3 py-5">
              <div className="size-12 shrink-0 rounded-[8px] bg-[var(--color-bg-0)] shadow-[inset_0_0_20px_#00000040]" />
              <div className="flex min-w-0 grow items-center gap-4">
                <div className="flex min-w-0 grow flex-col">
                  <p className="font-[var(--font-main)] font-[var(--font-weight-medium)] text-[var(--text-16)] leading-[var(--leading-16)] tracking-[-0.01em] text-[var(--color-text-primary)]">
                    UI/UX Intern
                  </p>
                  <p className="font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                    Codavatar pvt
                  </p>
                </div>
                <p className="shrink-0 font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                  Jan 2025-Feb 2025
                </p>
                <span className="flex size-5 shrink-0 items-center justify-center">
                  <Chevron />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Socials ── */}
        <section className="flex flex-col bg-[var(--color-bg-1)] outline-1 outline-solid outline-[var(--color-border-strong)]">
          <div className="flex items-center px-4 py-5">
            <h2 className="grow font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
              /Socials
            </h2>
          </div>
          <div className="flex items-stretch self-stretch">
            {[
              { label: 'Email', icon: <MailIcon /> },
              { label: 'Twitter(X)', icon: <TwitterIcon /> },
              { label: 'Linkedin', icon: <LinkedinIcon /> },
              { label: 'Behance', icon: <BehanceIcon /> },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className="flex min-w-0 grow basis-0 items-end gap-2.5 overflow-clip bg-[var(--color-bg-2)] px-4 pb-3 pt-20 shadow-[inset_0_0_0_0.5px_var(--color-border-soft),inset_0_0_20px_#00000040]"
              >
                <span className="flex size-4 shrink-0 items-center justify-center">
                  {s.icon}
                </span>
                <span className="font-[var(--font-main)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-secondary)]">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Pattern divider ── */}
        <div className="h-20 shrink-0 border border-dashed border-[var(--color-border-strong)]" />

        {/* ── Bottom dither ── */}
        <div className="border border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)]">
          <Dithering
            speed={0.66}
            shape="wave"
            type="4x4"
            size={1.5}
            scale={1.19}
            frame={440355.47}
            colorBack="#00000000"
            colorFront="#483604"
            className="h-[240px] w-full"
          />
        </div>

        {/* ── Footer ── */}
        <footer className="flex items-center justify-end gap-6 border-x border-t border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)] px-4 py-3">
          <p className="grow font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-tertiary)]">
            Visit count:20
          </p>
          <p className="font-[var(--font-decorative)] font-[var(--font-weight-regular)] text-[var(--text-14)] leading-[var(--leading-14)] tracking-[-0.01em] text-[var(--color-text-tertiary)]">
            version 1.0
          </p>
        </footer>
      </div>
    </div>
  )
}
