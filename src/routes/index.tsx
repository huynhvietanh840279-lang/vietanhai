import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  Clock,
  Copy,
  Facebook,
  LifeBuoy,
  ListChecks,
  MessageCircle,
  MessageSquare,
  Play,
  Plus,
  QrCode,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  UserCheck,
  Wallet,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import heroImage from "../assets/ai-chat-hero.jpg";
import speakerCutout from "../assets/huynh-viet-anh-tach-nen.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nhân viên AI chăm sóc khách hàng 24/7 | Việt Anh AI" },
      {
        name: "description",
        content:
          "Tự trả lời bình luận và tin nhắn Facebook tự nhiên như người thật, không biết mệt. Chỉ 50.000đ trả một lần là bạn có Nhân viên AI chăm sóc khách hàng 24/7.",
      },
      { property: "og:title", content: "Nhân viên AI chăm sóc khách hàng 24/7" },
      {
        property: "og:description",
        content:
          "Tự trả lời bình luận và tin nhắn Facebook tự nhiên như người thật. Chỉ 50.000đ – trả một lần.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    title: "Trả lời bình luận và tin nhắn 24/7",
    description:
      "Khách hỏi lúc nào nhân viên AI cũng trả lời ngay, kể cả nửa đêm, không bỏ sót một tin.",
    icon: MessageSquare,
  },
  {
    title: "Mỗi khách một câu trả lời riêng",
    description:
      "Câu văn tự nhiên như người thật, không lặp, không lộ máy – mỗi cuộc trò chuyện một cách viết riêng.",
    icon: UserCheck,
  },
  {
    title: "Học hồ sơ shop của bạn",
    description: "Nắm đúng sản phẩm, mức giá và cách xưng hô của shop để tư vấn đúng ý bạn.",
    icon: Store,
  },
  {
    title: "Không bịa giá, link, chính sách",
    description: "Chỉ nói những gì có trong hồ sơ shop. Chưa chắc chắn thì mời khách nhắn riêng.",
    icon: ShieldCheck,
  },
  {
    title: "Khách bực, khiếu nại – báo ngay chủ shop",
    description:
      "Gặp tình huống nhạy cảm, nhân viên AI dừng lại và chuyển để bạn vào xử lý trực tiếp.",
    icon: LifeBuoy,
  },
  {
    title: "Hướng dẫn cài đặt từng bước",
    description: "Hướng dẫn chi tiết từ A đến Z, kết nối xong là nhân viên AI bắt đầu làm việc.",
    icon: ListChecks,
  },
];

const withoutAi = [
  "Khách nhắn lúc nửa đêm, sáng hôm sau mới trả lời",
  "Bận đóng hàng, bỏ sót tin nhắn và bình luận",
  "Trả lời copy một mẫu câu, khách thấy máy móc",
  "Lo nhân viên nói sai giá, sai chính sách",
];

const withAi = [
  "Khách hỏi lúc nào cũng được trả lời ngay",
  "Không bỏ sót tin nhắn, bình luận nào",
  "Mỗi khách một câu trả lời riêng, tự nhiên",
  "Chỉ nói đúng hồ sơ shop, chưa chắc thì mời nhắn riêng",
];

const steps = [
  {
    title: "Chuyển khoản 50.000đ",
    description: "Bấm nút nhận Nhân viên AI, quét mã QR bằng app ngân hàng. Trả một lần.",
    icon: Wallet,
  },
  {
    title: "Nhắn Zalo xác nhận",
    description: "Gửi ảnh chụp chuyển khoản qua Zalo 0981081462 để được xác nhận.",
    icon: Send,
  },
  {
    title: "Cài đặt & cho AI làm việc",
    description:
      "Nhận Nhân viên AI kèm hướng dẫn từng bước. Kết nối xong là AI trực page thay bạn.",
    icon: Bot,
  },
];

const faqs = [
  {
    q: "Tôi trả phí một lần hay hàng tháng?",
    a: "Chỉ 50.000đ, trả một lần để nhận Nhân viên AI cùng hướng dẫn cài đặt.",
  },
  {
    q: "Nhân viên AI trả lời ở đâu?",
    a: "Nhân viên AI tự trả lời bình luận và tin nhắn Facebook của shop, mọi lúc trong ngày.",
  },
  {
    q: "AI có nói sai giá hay chính sách của shop không?",
    a: "Nhân viên AI chỉ nói những gì có trong hồ sơ shop. Thông tin nào chưa chắc chắn, AI sẽ mời khách nhắn riêng để bạn trả lời.",
  },
  {
    q: "Khách khó tính, khiếu nại thì sao?",
    a: "Gặp khách bực hoặc khiếu nại, Nhân viên AI dừng lại và chuyển ngay cho chủ shop xử lý trực tiếp.",
  },
  {
    q: "Tôi không rành công nghệ có dùng được không?",
    a: "Được. Bạn nhận hướng dẫn cài đặt chi tiết từng bước từ A đến Z, làm theo là dùng được ngay.",
  },
  {
    q: "Sau khi chuyển khoản tôi nhận bằng cách nào?",
    a: "Nhắn Zalo 0981081462 kèm ảnh chụp chuyển khoản, bạn sẽ nhận Nhân viên AI cùng hướng dẫn cài đặt.",
  },
];

const marqueeItems = [
  "Trả lời 24/7",
  "Tự nhiên như người thật",
  "Học hồ sơ shop",
  "Không bịa thông tin",
  "Chuyển khiếu nại cho chủ shop",
  "Hướng dẫn cài đặt A–Z",
  "Chỉ 50.000đ – trả một lần",
];

const zaloConfirmHref = "https://zalo.me/0981081462";
const facebookHref = "https://www.facebook.com/huynh.viet.anh.325127";
const bank = {
  name: "ACB",
  accountName: "HUYNH VIET ANH",
  accountNumber: "27445847",
  amount: "50.000đ (trả một lần)",
};

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return past;
}

function PaymentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  if (!open) return null;

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Thanh toán Nhân viên AI"
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-[var(--ink)]/75 p-4 backdrop-blur-md animate-in fade-in duration-200 sm:items-center"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in slide-in-from-bottom-6 zoom-in-95 duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="section-ink flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <QrCode className="size-5 text-[var(--gold)]" aria-hidden="true" />
            <h2 className="font-display text-lg font-extrabold">Nhận Nhân viên AI</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ thanh toán"
            className="flex size-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-6">
          <div className="rounded-xl border border-[var(--gold-deep)]/30 bg-accent px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Giá Nhân viên AI
            </p>
            <p className="mt-1 font-display text-3xl font-black text-[var(--gold-deep)]">
              {bank.amount}
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-background p-4">
            <img
              src="/payment-qr-acb.png"
              width={440}
              height={532}
              alt={`Mã QR chuyển khoản ${bank.amount} đến ${bank.accountName} tại ${bank.name}`}
              className="mx-auto w-full max-w-[15rem] rounded-lg"
            />
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Ngân hàng</dt>
                <dd className="font-bold">{bank.name}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Chủ tài khoản</dt>
                <dd className="text-right font-bold">{bank.accountName}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Số tiền</dt>
                <dd className="font-bold text-[var(--gold-deep)]">{bank.amount}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Số tài khoản</dt>
                <dd className="flex items-center gap-2 font-bold">
                  {bank.accountNumber}
                  <button
                    type="button"
                    onClick={copyAccount}
                    aria-label="Sao chép số tài khoản"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-xs font-bold text-[var(--gold-deep)] transition hover:bg-accent"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5" aria-hidden="true" /> Đã sao chép
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" aria-hidden="true" /> Sao chép
                      </>
                    )}
                  </button>
                </dd>
              </div>
            </dl>
          </div>

          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="icon-tile flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-black">
                1
              </span>
              <span>
                Mở app ngân hàng và quét mã QR ở trên (hoặc chuyển khoản thủ công theo thông tin tài
                khoản).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="icon-tile flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-black">
                2
              </span>
              <span>
                Chuyển khoản đúng <strong className="text-foreground">50.000đ</strong>, ghi chú tên
                của bạn để tiện xác nhận.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="icon-tile flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-black">
                3
              </span>
              <span>
                Nhấn nút bên dưới để nhắn Zalo{" "}
                <strong className="text-foreground">0981081462</strong> kèm ảnh chụp chuyển khoản,
                bạn sẽ nhận Nhân viên AI cùng hướng dẫn cài đặt từng bước.
              </span>
            </li>
          </ol>

          <a
            href={zaloConfirmHref}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-gold group mt-6 flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 py-4 text-center text-sm font-extrabold uppercase transition duration-200 hover:-translate-y-0.5 sm:text-base"
          >
            <MessageCircle className="relative z-10 size-5" aria-hidden="true" />
            <span className="relative z-10">Xác nhận qua Zalo 0981081462</span>
            <ArrowRight
              className="relative z-10 size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sau khi chuyển khoản, hãy nhắn tin để nhận Nhân viên AI sớm nhất.
          </p>
        </div>
      </div>
    </div>
  );
}

function CtaButton({
  children,
  onClick,
  size = "lg",
  pulse = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  size?: "sm" | "lg";
  pulse?: boolean;
}) {
  const sizing =
    size === "sm"
      ? "min-h-10 px-4 py-2 text-xs sm:text-sm rounded-full"
      : "min-h-15 px-8 py-4 text-sm sm:text-lg rounded-2xl";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cta-gold group inline-flex items-center justify-center gap-2.5 text-center font-extrabold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] ${sizing} ${pulse ? "cta-pulse" : ""}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight
        className="relative z-10 size-5 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <p
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest ${
          dark ? "bg-white/10 text-[var(--gold)]" : "bg-[var(--gold)]/20 text-[var(--gold-deep)]"
        }`}
      >
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl sm:text-lg ${dark ? "text-white/65" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Index() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const openPayment = () => setPaymentOpen(true);
  const scrolled = useScrolledPast(24);
  const pastHero = useScrolledPast(640);
  useReveal();

  return (
    <main className="overflow-x-clip bg-background text-foreground">
      {/* ---------- Header ---------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[var(--ink)]/85 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-base font-black text-white"
          >
            <span className="icon-tile flex size-8 items-center justify-center rounded-lg">
              <Bot className="size-4.5" aria-hidden="true" />
            </span>
            VIỆT ANH <span className="text-[var(--gold)]">AI</span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-semibold text-white/70 md:flex"
            aria-label="Điều hướng"
          >
            <a href="#loi-ich" className="transition hover:text-white">
              Lợi ích
            </a>
            <a href="#cach-nhan" className="transition hover:text-white">
              Cách nhận
            </a>
            <a href="#bang-gia" className="transition hover:text-white">
              Bảng giá
            </a>
            <a href="#hoi-dap" className="transition hover:text-white">
              Hỏi đáp
            </a>
          </nav>
          <CtaButton onClick={openPayment} size="sm">
            Nhận ngay
          </CtaButton>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="section-ink relative px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[var(--gold)] animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Zap className="size-3.5 fill-current" aria-hidden="true" />
              Chỉ 50.000đ – Trả một lần
            </div>
            <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem] animate-in fade-in slide-in-from-bottom-4 duration-700">
              Nhân viên AI
              <br />
              chăm sóc khách hàng <span className="text-gold-gradient">24/7</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-white/70 sm:text-xl lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Tự trả lời bình luận và tin nhắn Facebook{" "}
              <strong className="text-white">tự nhiên như người thật</strong>, không biết mệt – kể
              cả lúc bạn đang ngủ.
            </p>

            <ul className="mx-auto mt-7 grid max-w-xl gap-3 text-left sm:grid-cols-2 lg:mx-0">
              {[
                "Trả lời khách ngay, 24/7",
                "Học đúng giá & sản phẩm shop",
                "Không bịa thông tin",
                "Hướng dẫn cài đặt A–Z",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-semibold text-white/85 sm:text-base"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CtaButton onClick={openPayment} pulse>
                Nhận Nhân viên AI – 50.000đ
              </CtaButton>
              <a
                href="#cach-nhan"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/70 underline-offset-4 transition hover:text-white hover:underline"
              >
                Xem cách nhận
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50 lg:justify-start">
              <ShieldCheck className="size-4 text-[var(--gold)]" aria-hidden="true" />
              Chuyển khoản qua QR • Xác nhận & hỗ trợ qua Zalo
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="hero-frame animate-in fade-in zoom-in-95 duration-1000">
              <img
                src={heroImage}
                width={1536}
                height={864}
                alt="Minh họa nhân viên AI trả lời tin nhắn khách hàng liên tục ngày đêm"
                className="aspect-video w-full rounded-[0.95rem] object-cover"
              />
            </div>

            <div className="float-a absolute -left-3 -top-5 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[var(--ink-2)]/95 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8">
              <span
                className="live-dot size-2.5 rounded-full bg-[oklch(0.75_0.18_150)]"
                aria-hidden="true"
              />
              <div className="text-left">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">
                  Trạng thái
                </p>
                <p className="text-sm font-extrabold text-white">Đang trực page 24/7</p>
              </div>
            </div>

            <div className="float-b absolute -bottom-6 -right-2 max-w-[15rem] rounded-2xl border border-white/10 bg-white p-3.5 text-left shadow-2xl sm:-right-6">
              <div className="flex items-start gap-2.5">
                <span className="icon-tile flex size-8 shrink-0 items-center justify-center rounded-full">
                  <Bot className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[var(--ink)]">Nhân viên AI</p>
                  <p className="mt-0.5 text-xs leading-snug text-[oklch(0.4_0.02_280)]">
                    Dạ shop chào chị ạ! Mẫu này còn hàng, chị cần size nào để em tư vấn ạ?
                  </p>
                </div>
              </div>
              <p className="mt-2 flex items-center justify-end gap-1 text-[0.65rem] font-bold text-[oklch(0.55_0.15_150)]">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                Đã trả lời lúc 2:14 sáng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div
        className="border-y border-[var(--gold-deep)]/40 bg-[var(--gold)] py-3.5 text-[var(--ink)]"
        aria-hidden="true"
      >
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-4 whitespace-nowrap px-4 font-display text-sm font-extrabold uppercase tracking-wide sm:text-base"
              >
                {item}
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Before / After ---------- */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Vì sao cần Nhân viên AI"
            title={
              <>
                Khách hỏi mà không ai trả lời <br className="hidden sm:block" />
                là <span className="text-[var(--gold-deep)]">mất đơn</span>
              </>
            }
            subtitle="So sánh một ngày của shop khi tự trả lời khách và khi có Nhân viên AI trực page."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="reveal rounded-3xl border border-border bg-muted/60 p-7 sm:p-8">
              <p className="inline-flex rounded-full bg-[oklch(0.62_0.2_27)]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[oklch(0.55_0.2_27)]">
                Tự trả lời thủ công
              </p>
              <ul className="mt-6 space-y-4">
                {withoutAi.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <XCircle
                      className="mt-0.5 size-5 shrink-0 text-[oklch(0.62_0.2_27)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="reveal price-card rounded-3xl p-7 text-white sm:p-8"
              style={{ transitionDelay: "120ms" }}
            >
              <p className="inline-flex rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[var(--ink)]">
                Có Nhân viên AI
              </p>
              <ul className="mt-6 space-y-4">
                {withAi.map((item) => (
                  <li key={item} className="flex gap-3 font-semibold text-white/90">
                    <BadgeCheck
                      className="mt-0.5 size-5 shrink-0 text-[var(--gold)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section
        id="loi-ich"
        className="soft-band scroll-mt-16 border-y border-border px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Nhân viên AI làm được gì"
            title="Bạn sẽ nhận được gì?"
            subtitle="Sáu điều giúp shop có người trả lời khách mọi lúc, đúng thông tin và đúng giọng của bạn."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="reveal card-lift group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
                  style={{ transitionDelay: `${(index % 3) * 90}ms` }}
                >
                  <span className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-black leading-none text-[var(--gold)]/25 transition group-hover:text-[var(--gold)]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="icon-tile relative flex size-13 items-center justify-center rounded-2xl">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-extrabold leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="relative mt-2 leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="reveal mt-12 text-center">
            <CtaButton onClick={openPayment}>Tôi muốn có Nhân viên AI</CtaButton>
          </div>
        </div>
      </section>

      {/* ---------- How to get it ---------- */}
      <section id="cach-nhan" className="scroll-mt-16 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Chỉ 3 bước" title="Nhận Nhân viên AI thật đơn giản" />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div
              className="absolute left-[16%] right-[16%] top-9 hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--gold-deep)_0_10px,transparent_10px_18px)] md:block"
              aria-hidden="true"
            />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="reveal relative text-center"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="relative mx-auto flex size-18 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--gold)] shadow-xl ring-8 ring-background">
                    <Icon className="size-7" aria-hidden="true" />
                    <span className="icon-tile absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full text-xs font-black">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Demo video ---------- */}
      <section className="section-ink relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="hero-bg opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="reveal text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[var(--gold)]">
              <Play className="size-3.5 fill-current" aria-hidden="true" />
              Video demo
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
              Xem Nhân viên AI <span className="text-gold-gradient">làm việc</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/65 sm:text-lg lg:max-w-md">
              Xem Nhân viên AI trả lời bình luận, nhắn tin tư vấn và đăng bài giúp shop. Bật âm
              thanh để nghe trọn video. Shop và khách trong video là ví dụ minh họa.
            </p>
            <a
              href={zaloConfirmHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Hỏi qua Zalo 0981081462
            </a>
          </div>
          <div className="reveal hero-frame" style={{ transitionDelay: "120ms" }}>
            <div className="relative aspect-video overflow-hidden rounded-[0.95rem] bg-[var(--ink)]">
              <video
                src="/demo-nhan-vien-ai.mp4"
                poster="/demo-poster.jpg"
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Video demo Nhân viên AI trả lời bình luận, nhắn tin và đăng bài"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="bang-gia" className="soft-band scroll-mt-16 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Bảng giá"
            title={
              <>
                Trả một lần, <br />
                <span className="text-[var(--gold-deep)]">AI trực page mỗi ngày</span>
              </>
            }
            subtitle="Ít hơn một bữa ăn là bạn có nhân viên chăm sóc khách hàng không biết mệt."
          />
          <div className="reveal price-card mx-auto mt-14 max-w-lg overflow-hidden rounded-[2rem] p-8 text-white sm:p-10">
            <div className="absolute right-6 top-6 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-black uppercase text-[var(--ink)]">
              Trả một lần
            </div>
            <p className="pr-24 font-display text-lg font-bold text-white/70">
              Nhân viên AI chăm sóc khách hàng
            </p>
            <p className="mt-3 flex items-end gap-2">
              <span className="text-gold-gradient font-display text-6xl font-black leading-none sm:text-7xl">
                50.000đ
              </span>
            </p>
            <div className="my-7 h-px bg-white/10" />
            <ul className="space-y-3.5">
              {[
                "Nhân viên AI trả lời bình luận & tin nhắn Facebook 24/7",
                "Câu trả lời tự nhiên, riêng cho từng khách",
                "Học sản phẩm, giá và cách xưng hô của shop",
                "Không bịa giá, link, chính sách",
                "Chuyển khiếu nại cho chủ shop xử lý",
                "Hướng dẫn cài đặt từng bước từ A–Z",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/85">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--ink)]">
                    <Check className="size-3.5" strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <button
                type="button"
                onClick={openPayment}
                className="cta-gold cta-pulse group flex min-h-15 w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-wide transition hover:-translate-y-0.5 sm:text-lg"
              >
                <span className="relative z-10">Nhận Nhân viên AI ngay</span>
                <ArrowRight
                  className="relative z-10 size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
              <Clock className="size-3.5" aria-hidden="true" />
              Chuyển khoản QR, nhận hướng dẫn qua Zalo
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Speaker ---------- */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Người đứng sau" title="Người xây dựng sản phẩm" />
          <article className="reveal mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl md:grid-cols-[21rem_1fr]">
            <div className="section-ink relative flex items-end justify-center overflow-hidden px-6 pt-10">
              <div className="hero-bg" aria-hidden="true" />
              <div
                className="absolute bottom-0 left-1/2 size-64 -translate-x-1/2 translate-y-1/4 rounded-full bg-[radial-gradient(circle,var(--gold)_0%,var(--gold-deep)_60%,transparent_72%)] opacity-80"
                aria-hidden="true"
              />
              <img
                src={speakerCutout.url}
                loading="lazy"
                alt="Huỳnh Việt Anh – người xây dựng Nhân viên AI"
                className="relative w-full max-w-[16rem] drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-sm font-extrabold uppercase tracking-widest text-[var(--gold-deep)]">
                Việt Anh AI
              </p>
              <h3 className="mt-2 font-display text-3xl font-black sm:text-4xl">Huỳnh Việt Anh</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Nhân viên AI", "Tự động hóa", "Chăm sóc khách hàng"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--gold-deep)]/30 bg-[var(--gold)]/15 px-3 py-1 text-xs font-bold text-[var(--gold-deep)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Người xây dựng Nhân viên AI chăm sóc khách hàng, giúp chủ shop có ngay trợ lý trả
                lời khách mọi lúc mà không cần lo vận hành.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  <Facebook className="size-4 text-[var(--gold)]" aria-hidden="true" />
                  Facebook: Huỳnh Việt Anh
                </a>
                <a
                  href={zaloConfirmHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold transition hover:bg-accent"
                >
                  <MessageCircle className="size-4 text-[var(--gold-deep)]" aria-hidden="true" />
                  Zalo 0981081462
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section
        id="hoi-dap"
        className="scroll-mt-16 border-t border-border bg-muted/40 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Hỏi đáp" title="Câu hỏi thường gặp" />
          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="faq reveal group rounded-2xl border border-border bg-card px-6 py-5 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold sm:text-lg">
                  {faq.q}
                  <span className="faq-icon flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--gold-deep)] transition-transform duration-300">
                    <Plus className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="section-ink relative overflow-hidden px-5 py-24 text-center sm:px-8 lg:py-32">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="reveal relative mx-auto max-w-4xl">
          <div className="icon-tile mx-auto flex size-16 items-center justify-center rounded-2xl">
            <Bot className="size-8" aria-hidden="true" />
          </div>
          <h2 className="mt-7 font-display text-4xl font-black leading-tight sm:text-6xl">
            Để AI lo phần trả lời khách,
            <br />
            <span className="text-gold-gradient">bạn lo phần bán hàng</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/65 sm:text-lg">
            Khách được trả lời ngay mọi lúc, bạn giữ trọn thời gian cho việc quan trọng hơn.
          </p>
          <div className="mt-10">
            <CtaButton onClick={openPayment} pulse>
              Nhận Nhân viên AI – 50.000đ
            </CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[var(--ink)] px-5 pb-28 pt-8 text-white sm:px-8 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-display font-black">
            <Sparkles className="size-5 text-[var(--gold)]" aria-hidden="true" />
            VIỆT ANH AI
          </div>
          <p className="text-xs text-white/50">Nhân viên AI chăm sóc khách hàng</p>
          <a
            href={zaloConfirmHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/50 transition hover:text-[var(--gold)]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Hỗ trợ Zalo 0981081462
          </a>
        </div>
      </footer>

      {/* ---------- Mobile sticky CTA ---------- */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[var(--ink)]/95 px-4 py-3 backdrop-blur-lg transition-transform duration-300 md:hidden ${
          pastHero ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">
              Nhân viên AI 24/7
            </p>
            <p className="font-display text-xl font-black text-[var(--gold)]">50.000đ</p>
          </div>
          <button
            type="button"
            onClick={openPayment}
            className="cta-gold flex min-h-12 items-center gap-2 rounded-xl px-5 text-sm font-extrabold uppercase"
          >
            <span className="relative z-10">Nhận ngay</span>
            <ArrowRight className="relative z-10 size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </main>
  );
}
