```javascript
import React, { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Feed.css';
import { trackEvent } from '../analytics';

const initialItems = [
  { id: 1, title: 'Welcome to the Feed!', content: 'Here you will find inspiration and resources to help you achieve your goals.', liked: false },
  { id: 2, title: 'Tip: Break Down Your Goals', content: 'Large goals can be overwhelming. Break them down into smaller, manageable steps.', liked: false },
  { id: 3, title: 'Success Story: How I Learned a New Language', content: 'Read about how one of our users successfully learned Spanish in 6 months.', liked: false },
  { id: 4, title: 'New Feature: Goal Tracking', content: 'We\'ve just launched a new feature to help you track your progress. Check it out!', liked: false },
  { id: 5, title: 'Community Post: What are you working on?', content: 'Share your current goals and get feedback from the community.', liked: false },
];

const moreItems = [
    { id: 6, title: 'Another Tip', content: 'This is another great tip.', liked: false },
    { id: 7, title: 'Another Success Story', content: 'Another user achieved their goals.', liked: false },
    { id: 8, title: 'Another New Feature', content: 'We have a new feature for you.', liked: false },
    { id: 9, title: 'Another Community Post', content: 'Join the conversation.', liked: false },
    { id: 10, title: 'Final Tip', content: 'This is the last tip for now.', liked: false },
];

const Feed = () => {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    loadMore();
  };

  const loadMore = () => {
    if (!hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...moreItems]);
      setLoading(false);
      setHasMore(false); // For this example, we only load one more batch
    }, 1500);
  };

  const handleLike = (id) => {
    const likedItem = items.find(item => item.id === id);
    if (likedItem) {
      const eventName = likedItem.liked ? 'Unlike Post' : 'Like Post';
      trackEvent(eventName, { postId: id, postTitle: likedItem.title });
    }

    setItems(items.map(item =>
      item.id === id ? { ...item, liked: !item.liked } : item
    ));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="feed-container">
      <h1>Your Feed</h1>
      {items.map(item => (
        <Card key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <Button
            onClick={() => handleLike(item.id)}
            variant={item.liked ? 'primary' : 'secondary'}
            className={`like-button ${item.liked ? 'liked' : ''}`}
            aria-label={item.liked ? `Unlike post titled ${item.title}` : `Like post titled ${item.title}`}
          >
            {item.liked ? 'Liked' : 'Like'}
          </Button>
        </Card>
      ))}
      {loading && <p>Loading more...</p>}
      {!hasMore && <p className="end-of-feed">You're all caught up!</p>}
    </div>
  );
};

export default Feed;
```
