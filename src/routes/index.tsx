import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Code2,
  Gift,
  Lightbulb,
  Network,
  Play,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import heroImage from "../assets/ai-agent-command-center.jpg";
import speakerImage from "../assets/speaker-illustration.jpg";

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

const zaloHref = "https://zaloapp.com/qr/p/1np4wdmo7yk4v";

function CtaLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={zaloHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Liên hệ Huỳnh Việt Anh qua Zalo"
      className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-primary px-7 py-4 text-center text-sm font-extrabold uppercase text-primary-foreground shadow-[var(--shadow-cta)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-base"
    >
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

function Index() {
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
            <CtaLink>Nhận vé &amp; miễn phí tài nguyên</CtaLink>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Bấm nút để kết bạn Zalo và nhận thông tin tham gia.
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
            <CtaLink>Đăng ký qua Zalo</CtaLink>
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
    </main>
  );
}