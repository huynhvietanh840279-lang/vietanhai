import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  Copy,
  Facebook,
  LifeBuoy,
  ListChecks,
  MessageCircle,
  MessageSquare,
  Play,
  QrCode,
  ShieldCheck,
  Sparkles,
  Store,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../assets/ai-chat-hero.jpg";
import speakerImage from "../assets/huynh-viet-anh.jpg.asset.json";
import speakerCutout from "../assets/huynh-viet-anh-tach-nen.png.asset.json";
import paymentQr from "../assets/payment-qr.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nhân viên AI chăm sóc khách hàng 24/7 | Việt Anh AI" },
      {
        name: "description",
        content:
          "Tự trả lời bình luận và tin nhắn Facebook tự nhiên như người thật, không biết mệt. Chỉ 2$ trả một lần là bạn có Nhân viên AI chăm sóc khách hàng 24/7.",
      },
      { property: "og:title", content: "Nhân viên AI chăm sóc khách hàng 24/7" },
      {
        property: "og:description",
        content:
          "Tự trả lời bình luận và tin nhắn Facebook tự nhiên như người thật. Chỉ 2$ – trả một lần.",
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
    description: "Khách hỏi lúc nào nhân viên AI cũng trả lời ngay, kể cả nửa đêm, không bỏ sót một tin.",
    icon: MessageSquare,
  },
  {
    title: "Mỗi khách một câu trả lời riêng, không lặp, không lộ máy",
    description: "Câu văn tự nhiên như người thật, mỗi cuộc trò chuyện một cách viết riêng biệt.",
    icon: UserCheck,
  },
  {
    title: "Học hồ sơ shop: sản phẩm, giá, cách xưng hô",
    description: "Nhân viên AI nắm đúng sản phẩm, mức giá và giọng nói của shop để tư vấn đúng ý bạn.",
    icon: Store,
  },
  {
    title: "Không bịa giá, link, chính sách – chưa chắc thì mời khách nhắn riêng",
    description: "Chỉ nói những gì có trong hồ sơ shop, thông tin chưa chắc chắn sẽ mời khách nhắn riêng.",
    icon: ShieldCheck,
  },
  {
    title: "Khiếu nại, khách bực – chuyển ngay cho chủ shop xử lý",
    description: "Gặp tình huống nhạy cảm, nhân viên AI dừng lại và báo bạn vào xử lý trực tiếp.",
    icon: LifeBuoy,
  },
  {
    title: "Hướng dẫn cài đặt từng bước, dùng được ngay",
    description: "Bạn được hướng dẫn chi tiết từ A đến Z, kết nối xong là nhân viên AI bắt đầu làm việc.",
    icon: ListChecks,
  },
];

const zaloConfirmHref = "https://zalo.me/0981081462";
const facebookHref = "https://www.facebook.com/huynh.viet.anh.325127";
const bank = { name: "ACB", accountName: "HUYNH VIET ANH", accountNumber: "27445847", amount: "2$ (trả một lần)" };

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
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-foreground/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-md overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-hero)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border bg-accent px-5 py-4">
          <div className="flex items-center gap-2">
            <QrCode className="size-5 text-primary" aria-hidden="true" />
            <h2 className="font-display text-lg font-black">Nhận Nhân viên AI</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ thanh toán"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition hover:bg-background hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:px-6">
          <div className="rounded-md border border-primary/25 bg-accent px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase text-muted-foreground">Giá Nhân viên AI</p>
            <p className="mt-1 font-display text-3xl font-black text-primary">{bank.amount}</p>
          </div>

          <div className="mt-5 rounded-md border border-border bg-background p-4">
            <img
              src={paymentQr.url}
              width={487}
              height={590}
              alt={`Mã QR chuyển khoản ${bank.amount} đến ${bank.accountName} tại ${bank.name}`}
              className="mx-auto w-full max-w-[15rem] rounded-md"
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
                <dd className="font-bold text-primary">{bank.amount}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Số tài khoản</dt>
                <dd className="flex items-center gap-2 font-bold">
                  {bank.accountNumber}
                  <button
                    type="button"
                    onClick={copyAccount}
                    aria-label="Sao chép số tài khoản"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-xs font-bold text-primary transition hover:bg-accent"
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
              <span className="font-display font-black text-primary">1.</span>
              <span>Mở app ngân hàng và quét mã QR ở trên (hoặc chuyển khoản thủ công theo thông tin tài khoản).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display font-black text-primary">2.</span>
              <span>
                Chuyển khoản số tiền tương đương <strong className="text-foreground">2$</strong>, ghi chú tên của bạn để tiện xác nhận.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-display font-black text-primary">3.</span>
              <span>
                Nhấn nút bên dưới để nhắn Zalo <strong className="text-foreground">0981081462</strong> kèm ảnh chụp chuyển khoản, bạn sẽ nhận Nhân viên AI cùng hướng dẫn cài đặt từng bước.
              </span>
            </li>
          </ol>

          <a
            href={zaloConfirmHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex min-h-14 items-center justify-center gap-3 rounded-md bg-[var(--primary-bright)] px-6 py-4 text-center text-sm font-extrabold uppercase text-primary-foreground shadow-[var(--shadow-cta)] transition duration-200 hover:-translate-y-0.5 hover:brightness-95 sm:text-base"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Xác nhận qua Zalo 0981081462
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sau khi chuyển khoản, hãy nhắn tin để nhận Nhân viên AI sớm nhất.
          </p>
        </div>
      </div>
    </div>
  );
}

function CtaButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[var(--primary-bright)] px-7 py-4 text-center text-sm font-extrabold uppercase text-primary-foreground shadow-[var(--shadow-cta)] transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-base"
    >
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </button>
  );
}

function Index() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const openPayment = () => setPaymentOpen(true);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:pb-28">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-circuit" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase text-primary">
            <Zap className="size-3.5 fill-current" aria-hidden="true" />
            Chỉ 2$ – Trả một lần
          </div>
          <h1 className="mx-auto max-w-5xl font-display text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            NHÂN VIÊN AI CHĂM SÓC KHÁCH HÀNG <span className="text-primary">24/7</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-muted-foreground sm:text-2xl">
            Tự trả lời bình luận và tin nhắn Facebook tự nhiên như người thật, không biết mệt.
          </p>

          <div className="relative mt-9">
            <img
              src={speakerCutout.url}
              alt="Huỳnh Việt Anh – người xây dựng Nhân viên AI"
              className="pointer-events-none absolute -top-24 right-2 z-10 hidden w-44 drop-shadow-[0_18px_30px_color-mix(in_oklab,var(--primary)_35%,transparent)] lg:block xl:right-10 xl:w-52"
            />
            <div className="relative overflow-hidden rounded-lg border-2 border-[var(--primary-bright)] shadow-[var(--shadow-hero)]">
            <img
              src={heroImage}
              width={1536}
              height={864}
              alt="Minh họa nhân viên AI trả lời tin nhắn khách hàng liên tục ngày đêm"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-foreground/90 via-foreground/15 to-transparent px-5 py-5 text-left sm:px-8 sm:py-7">
              <div className="max-w-md text-background">
                <p className="text-xs font-bold uppercase text-[var(--primary-bright)]">Không biết mệt</p>
                <p className="mt-1 font-display text-2xl font-black sm:text-3xl">Trả lời khách mọi lúc mọi nơi</p>
              </div>
            </div>
            </div>
          </div>

          <p className="mt-8 text-base text-muted-foreground">
            Chỉ 2$ là bạn có nhân viên AI chăm sóc khách hàng không biết mệt.
          </p>
          <div className="mt-5">
            <CtaButton onClick={openPayment}>Nhận Nhân viên AI – 2$</CtaButton>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Bấm nút để chuyển khoản 2$ và nhận Nhân viên AI qua Zalo.
          </p>
        </div>
      </section>

      <section className="benefits-band border-y border-border px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-primary">Nhân viên AI làm được gì</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Bạn sẽ nhận được gì?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              Sáu điều giúp shop có người trả lời khách mọi lúc, đúng thông tin và đúng giọng của bạn.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="benefit-row grid grid-cols-[4.25rem_1fr_auto] items-center gap-4 border border-border bg-card p-4 sm:grid-cols-[5.5rem_4rem_1fr_auto] sm:gap-6 sm:p-6"
                >
                  <div className="font-display text-4xl font-black text-primary sm:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="hidden size-14 items-center justify-center rounded-md border border-primary/20 bg-accent text-primary sm:flex">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-extrabold sm:text-2xl">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-primary/45" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-primary">Người đứng sau</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Người xây dựng sản phẩm</h2>
          </div>
          <article className="mt-10 grid overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] md:grid-cols-[20rem_1fr]">
            <img
              src={speakerImage.url}
              loading="lazy"
              width={675}
              height={1200}
              alt="Huỳnh Việt Anh – người xây dựng Nhân viên AI tại Việt Anh AI"
              className="h-full w-full object-cover object-top md:aspect-auto"
            />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-sm font-bold uppercase text-primary">Việt Anh AI</p>
              <h3 className="mt-2 font-display text-3xl font-black sm:text-4xl">Huỳnh Việt Anh</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Nhân viên AI", "Tự động hóa", "Việt Anh AI"].map((tag) => (
                  <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Người xây dựng Nhân viên AI chăm sóc khách hàng, giúp chủ shop có ngay trợ lý trả lời khách mọi lúc mà không cần lo vận hành.
              </p>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:bg-accent"
              >
                <Facebook className="size-4 text-primary" aria-hidden="true" />
                Facebook: Huỳnh Việt Anh
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-primary">Video demo</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Xem Nhân viên AI làm việc</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-background/65 sm:text-lg">
              Video demo sẽ được cập nhật tại đây.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-background/15 bg-background/5">
            <img
              src={heroImage}
              loading="lazy"
              width={1536}
              height={864}
              alt="Ảnh bìa video demo Nhân viên AI"
              className="h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[var(--primary-bright)] text-primary-foreground shadow-[var(--shadow-cta)]">
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </div>
              <span className="mt-4 text-sm font-bold">Video demo sắp được cập nhật</span>
            </div>
          </div>
        </div>
      </section>

      <section className="community-band px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <Bot className="mx-auto size-10 text-primary" aria-hidden="true" />
          <h2 className="mt-5 font-display text-4xl font-black sm:text-6xl">Để AI lo phần trả lời khách, bạn lo phần bán hàng</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Khách được trả lời ngay mọi lúc, bạn giữ trọn thời gian cho việc quan trọng hơn.
          </p>
          <div className="mt-8">
            <CtaButton onClick={openPayment}>Nhận Nhân viên AI – 2$</CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-background/10 bg-foreground px-5 py-8 text-background sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-display font-black">
            <Sparkles className="size-5 text-primary" aria-hidden="true" />
            VIỆT ANH AI
          </div>
          <p className="text-xs text-background/55">Nhân viên AI chăm sóc khách hàng</p>
          <div className="flex items-center gap-2 text-xs text-background/55">
            <MessageCircle className="size-4" aria-hidden="true" />
            Hỗ trợ Zalo 0981081462
          </div>
        </div>
      </footer>

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </main>
  );
}
