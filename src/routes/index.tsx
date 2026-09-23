import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  Code2,
  Copy,
  Gift,
  Lightbulb,
  MessageCircle,
  Network,
  Play,
  QrCode,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../assets/ai-agent-command-center.jpg";
import speakerImage from "../assets/speaker-illustration.jpg";
import paymentQr from "../assets/payment-qr.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi Agent Cày Thay Mình 24/7 | Huỳnh Việt Anh" },
      {
        name: "description",
        content:
          "Buổi huấn luyện AI Agent cùng Huỳnh Việt Anh lúc 20:00 ngày 30/9. Khám phá cách xây đội agent, ứng dụng skill và tự động hóa công việc.",
      },
      { property: "og:title", content: "Nuôi Agent Cày Thay Mình 24/7" },
      {
        property: "og:description",
        content: "Huấn luyện thực chiến AI Agent cùng Huỳnh Việt Anh, 20:00 ngày 30/9.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    title: "Sở hữu đội AI agent phối hợp cùng bạn",
    description: "Hiểu cách chia vai, giao việc và kết nối nhiều agent thành một quy trình hoàn chỉnh.",
    icon: Bot,
  },
  {
    title: "Xây kênh với subagent theo cách khác biệt",
    description: "Khám phá cách dùng từng agent chuyên trách để nghiên cứu, sáng tạo và vận hành nội dung.",
    icon: Network,
  },
  {
    title: "Tự xây ứng dụng phục vụ công việc",
    description: "Biến nhu cầu thực tế thành công cụ AI của riêng bạn, chủ động hơn trong mỗi quy trình.",
    icon: Wrench,
  },
  {
    title: "Đóng gói skill thành sản phẩm",
    description: "Nắm tư duy biến một skill hữu ích thành giải pháp có thể giới thiệu và vận hành rõ ràng.",
    icon: ShoppingBag,
  },
  {
    title: "Nhận bộ tài nguyên thực hành",
    description: "Có thêm tài liệu và khung tham khảo để bắt đầu thử nghiệm ngay sau buổi huấn luyện.",
    icon: Gift,
  },
  {
    title: "Mở rộng ý tưởng ứng dụng AI",
    description: "Nhìn thấy thêm những bài toán thật nơi agent có thể tiết kiệm thời gian và tạo giá trị.",
    icon: Lightbulb,
  },
];

const zaloConfirmHref = "https://zalo.me/0981081462";
const bank = { name: "ACB", accountName: "HUYNH VIET ANH", accountNumber: "27445847", amount: "50.000đ" };

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
      aria-label="Thanh toán đăng ký"
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
            <h2 className="font-display text-lg font-black">Hoàn tất đăng ký</h2>
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
            <p className="text-xs font-bold uppercase text-muted-foreground">Phí tham gia</p>
            <p className="mt-1 font-display text-3xl font-black text-primary">{bank.amount}</p>
          </div>

          <div className="mt-5 rounded-md border border-border bg-background p-4">
            <img
              src={paymentQr.url}
              width={899}
              height={1600}
              alt={`Mã QR chuyển khoản ${bank.amount} đến ${bank.accountName} tại ${bank.name}`}
              className="mx-auto aspect-square w-full max-w-[16rem] rounded-md object-contain"
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
                Chuyển đúng số tiền <strong className="text-foreground">{bank.amount}</strong>, ghi chú tên của bạn để tiện xác nhận.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-display font-black text-primary">3.</span>
              <span>
                Nhấn nút bên dưới để nhắn Zalo <strong className="text-foreground">0981081462</strong> kèm ảnh chụp chuyển khoản, Huỳnh Việt Anh sẽ xác nhận và gửi vé cùng tài nguyên cho bạn.
              </span>
            </li>
          </ol>

          <a
            href={zaloConfirmHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex min-h-14 items-center justify-center gap-3 rounded-md bg-primary px-6 py-4 text-center text-sm font-extrabold uppercase text-primary-foreground shadow-[var(--shadow-cta)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Xác nhận qua Zalo 0981081462
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sau khi chuyển khoản, hãy nhắn tin xác nhận để giữ chỗ sớm nhất.
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
      className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-primary px-7 py-4 text-center text-sm font-extrabold uppercase text-primary-foreground shadow-[var(--shadow-cta)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-base"
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
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase text-primary">
            <Zap className="size-3.5 fill-current" aria-hidden="true" />
            Huấn luyện cấp tốc một lần duy nhất
          </div>
          <h1 className="mx-auto max-w-5xl font-display text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            NUÔI AGENT CÀY THAY MÌNH <span className="text-primary">24/7</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-muted-foreground sm:text-2xl">
            Từ một skill đơn lẻ thành hệ thống agent biết phối hợp, thực thi và tạo giá trị.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-accent px-5 py-3 font-bold text-accent-foreground">
            <CalendarDays className="size-5 text-primary" aria-hidden="true" />
            20:00 ngày 30/9
          </div>

          <div className="relative mt-9 overflow-hidden rounded-lg border-2 border-primary shadow-[var(--shadow-hero)]">
            <img
              src={heroImage}
              width={1536}
              height={864}
              alt="Không gian điều phối nhiều AI agent từ một máy tính trung tâm"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-foreground/90 via-foreground/15 to-transparent px-5 py-5 text-left sm:px-8 sm:py-7">
              <div className="max-w-md text-background">
                <p className="text-xs font-bold uppercase text-primary-foreground/80">Một người điều phối</p>
                <p className="mt-1 font-display text-2xl font-black sm:text-3xl">Nhiều agent cùng hành động</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-base text-muted-foreground">
            Đừng chỉ đứng ngoài quan sát AI. Hãy bắt đầu xây hệ thống của riêng bạn.
          </p>
          <div className="mt-5">
            <CtaButton onClick={openPayment}>Đăng ký ngay</CtaButton>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Bấm nút để chuyển khoản 50.000đ và xác nhận qua Zalo.
          </p>
        </div>
      </section>

      <section className="benefits-band border-y border-border px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-primary">Nội dung thực chiến</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Bạn sẽ nhận được gì?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              Sáu mảnh ghép giúp bạn đi từ ý tưởng đến một hệ thống agent có thể ứng dụng vào công việc.
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
            <p className="text-sm font-bold uppercase text-primary">Người dẫn dắt</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Diễn giả huấn luyện</h2>
          </div>
          <article className="mt-10 grid overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] md:grid-cols-[20rem_1fr]">
            <img
              src={speakerImage}
              loading="lazy"
              width={1024}
              height={1024}
              alt="Chân dung minh họa cho diễn giả Huỳnh Việt Anh"
              className="aspect-square h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-sm font-bold uppercase text-primary">AI Agent &amp; Automation</p>
              <h3 className="mt-2 font-display text-3xl font-black sm:text-4xl">Huỳnh Việt Anh</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {["AI Agent", "Vibe Coding", "Tự động hóa"].map((tag) => (
                  <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Đồng hành cùng bạn khám phá cách tổ chức AI agent thành một hệ thống rõ vai trò, dễ áp dụng và sát với công việc thực tế.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">Hình ảnh mang tính minh họa.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-primary">Xem trước nội dung</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Tư duy đứng sau một đội agent</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-background/65 sm:text-lg">
              Video giới thiệu sẽ được cập nhật tại đây. Bạn có thể giữ chỗ trước để nhận thông báo và bộ tài nguyên đi kèm.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-background/15 bg-background/5">
            <img
              src={heroImage}
              loading="lazy"
              width={1536}
              height={864}
              alt="Ảnh bìa nội dung giới thiệu AI agent"
              className="h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-cta)]">
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </div>
              <span className="mt-4 text-sm font-bold">Video sắp được cập nhật</span>
            </div>
          </div>
        </div>
      </section>

      <section className="community-band px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <Users className="mx-auto size-10 text-primary" aria-hidden="true" />
          <h2 className="mt-5 font-display text-4xl font-black sm:text-6xl">Nơi bạn không phải học AI một mình</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Gặp gỡ những người đang cùng thử nghiệm agent, chia sẻ bài toán thật và biến hiểu biết thành hành động.
          </p>
          <div className="mt-8">
            <CtaButton onClick={openPayment}>Đăng ký ngay</CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-background/10 bg-foreground px-5 py-8 text-background sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-display font-black">
            <Sparkles className="size-5 text-primary" aria-hidden="true" />
            NUÔI AGENT 24/7
          </div>
          <p className="text-xs text-background/55">Chương trình huấn luyện cùng Huỳnh Việt Anh</p>
          <div className="flex items-center gap-2 text-xs text-background/55">
            <Code2 className="size-4" aria-hidden="true" />
            Xây hệ thống. Làm chủ công việc.
          </div>
        </div>
      </footer>

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </main>
  );
}
