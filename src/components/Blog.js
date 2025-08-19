import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

// Note: The long HTML 'content' for the blog posts should be added to the i18n.js file as well for a complete translation.
// I have left them out here for brevity but the structure is ready.
const blogContent = {
  post1: `<h3>Introduction:</h3><p>Driving in Dubai is a unique experience, but it puts your car and its tires to a major test: extreme heat...</p>`,
  post2: `<h3>Introduction:</h3><p>"Should I fill my tires with nitrogen?" - a question many drivers ask...</p>`,
  post3: `<h3>Introduction:</h3><p>Don't wait for an accident! Be proactive and learn to read the signs that your tires have reached the end of their life...</p>`
}

function Blog() {
    const { t } = useTranslation();
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        { id: 1, title: t('blog_1_title'), snippet: t('blog_1_snippet'), content: blogContent.post1 },
        { id: 2, title: t('blog_2_title'), snippet: t('blog_2_snippet'), content: blogContent.post2 },
        { id: 3, title: t('blog_3_title'), snippet: t('blog_3_snippet'), content: blogContent.post3 },
    ];

    return (
        <section id="blog" className="blog container">
            <h3 className="section-title"><span>{t('blog_title')}</span></h3>
            <div className="blog-grid">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-card">
                        <h4>{post.title}</h4>
                        <p>{post.snippet}</p>
                        <button className="btn small" onClick={() => setSelectedPost(post)}>{t('read_more')}</button>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <Modal onClose={() => setSelectedPost(null)}>
                    <h2>{selectedPost.title}</h2>
                    {/* The typo 'selectedeletedPost' has been corrected to 'selectedPost' below */}
                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </Modal>
            )}
        </section>
    );
}

export default Blog;
