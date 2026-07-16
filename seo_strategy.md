# SEO Strategy

## In scope
- Public marketing pages in `artifacts/gobrain/`
- Product and feature pages (`/`, `/its`, `/its-school`, `/strefa-terapeuty`, `/karta-mowy`, `/sklep`)
- Informational and support pages (`/szkolenia-i-webinary`, `/darmowe-webinary`, `/blog`, `/blog/:slug`, `/faq`, `/pomoc`)
- Educational catalog pages (`/programy-edukacyjne`, `/programy-edukacyjne/:slug`)

## Out of scope
- Authenticated product experiences hosted outside this SPA
- Third-party checkout and download destinations linked from the marketing site
- Live production behavior that cannot be verified from source code alone

## Target audience
- Polish-speaking parents of children with concentration, auditory processing, speech, or learning difficulties
- Therapists, logopedists, pedagogues, schools, and educational institutions evaluating GoBrain products

## Primary keywords
- interaktywny trening słuchowy
- trening słuchowy dla dzieci
- CAPD
- zaburzenia przetwarzania słuchowego
- logopedia / terapia logopedyczna
- programy edukacyjne dla dzieci

## Notes
- The app is a pure React + Vite SPA with React Router and no SSR or prerender layer.
- All route-level SEO conclusions must be derived from the static shell in `artifacts/gobrain/index.html` plus source templates.

## Dismissed categories
- (None yet)
