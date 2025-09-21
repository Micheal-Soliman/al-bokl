import { medicalArticles } from '../../data/articles/articlesData';

export async function GET() {
  const baseUrl = 'https://www.albokl.com';
  const siteTitle = 'د. أسامة البكل - مقالات طبية متخصصة';
  const siteDescription = 'مقالات طبية متخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب من د. أسامة البكل';
  
  const rssItems = medicalArticles
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .map((article) => {
      const pubDate = new Date(article.publishedDate).toUTCString();
      const articleUrl = `${baseUrl}/articles/${article.slug}`;
      
      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.excerpt}]]></description>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>dr.osama@albokl.com (د. أسامة محمد البكل)</author>
      <category><![CDATA[${article.category}]]></category>
      ${article.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
      <dc:creator><![CDATA[د. أسامة محمد البكل]]></dc:creator>
      <content:encoded><![CDATA[
        <p>${article.excerpt}</p>
        <p><strong>الكاتب:</strong> ${article.author}</p>
        <p><strong>التصنيف:</strong> ${article.category}</p>
        <p><strong>وقت القراءة:</strong> ${article.readTime} دقائق</p>
        <p><a href="${articleUrl}">اقرأ المقال كاملاً</a></p>
      ]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <description><![CDATA[${siteDescription}]]></description>
    <link>${baseUrl}</link>
    <language>ar</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>dr.osama@albokl.com (د. أسامة محمد البكل)</managingEditor>
    <webMaster>webmaster@albokl.com</webMaster>
    <generator>Next.js RSS Generator</generator>
    <image>
      <url>${baseUrl}/images/logo.webp</url>
      <title><![CDATA[${siteTitle}]]></title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <category><![CDATA[أمراض الذكورة]]></category>
    <category><![CDATA[الصحة الجنسية]]></category>
    <category><![CDATA[تأخر الإنجاب]]></category>
    <category><![CDATA[العمليات الجراحية]]></category>
    <ttl>60</ttl>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
