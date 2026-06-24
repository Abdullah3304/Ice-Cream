import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — XYZ Ice Cream',
  description: 'Get in touch with XYZ Ice Cream — partnerships, feedback, and more.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            Say hello
          </p>
          <h1>
            We&apos;d love to
            <span className="text-gradient"> hear from you</span>
          </h1>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
