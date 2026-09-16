import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-semibold">
              {profile.name}
            </div>

            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
              AI · DATA SCIENCE · NLP
            </div>

            <p className="mt-4 max-w-sm text-sm text-muted">
              Building intelligent solutions with data, NLP and deep learning.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 font-mono text-xs uppercase tracking-wider">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-signal"
              >
                {social.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-signal"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-line pt-5 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
