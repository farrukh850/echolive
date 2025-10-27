import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'step-1': resolve(__dirname, 'authentication/step-1.html'),
        'step-2': resolve(__dirname, 'authentication/step-2.html'),
        'step-3': resolve(__dirname, 'authentication/step-3.html'),
        'collection-posts': resolve(__dirname, 'collections/collection-posts.html'),
        'collection-posts-empty': resolve(__dirname, 'collections/collection-posts-empty.html'),
        'create-new-post': resolve(__dirname, 'create-new-post/create-new-post.html'),
        'messages': resolve(__dirname, 'messages/messages.html'),
        'notifications': resolve(__dirname, 'notifications/notifications.html'),
        'notification-empty': resolve(__dirname, 'notifications/notification-empty.html'),
        'my-profile-setting': resolve(__dirname, 'settings/my-profile-setting.html'),
        'subscription-settings': resolve(__dirname, 'settings/subscription-settings.html'),
        'packages-empty': resolve(__dirname, 'settings/packages-empty.html'),
        'my-subscriptions': resolve(__dirname, 'settings/my-subscriptions.html'),
        'my-subscriptions-empty': resolve(__dirname, 'settings/my-subscriptions-empty.html'),
        'my-interests': resolve(__dirname, 'settings/my-interests.html'),
        'payment-details': resolve(__dirname, 'settings/payment-details.html'),
        'payment-details-empty': resolve(__dirname, 'settings/payment-details-empty.html'),
        'my-profile': resolve(__dirname, 'profiles/my-profile.html'),
        'other-user-profile': resolve(__dirname, 'profiles/other-user-profile.html'),
        'team-members': resolve(__dirname, 'team/team-members.html'),
        'team-members-empty': resolve(__dirname, 'team/team-members-empty.html'),
        'invitation-rejected': resolve(__dirname, 'team/invitation-rejected.html'),
        'invitation-sent': resolve(__dirname, 'team/invitation-sent.html'),
        'invitation-sent-empty': resolve(__dirname, 'team/invitation-sent-empty.html'),
        'invitation-rejected-empty': resolve(__dirname, 'team/invitation-rejected-empty.html'),
        'my-posts': resolve(__dirname, 'my-posts/my-posts.html'),
        'my-posts-empty': resolve(__dirname, 'my-posts/my-posts-empty.html'),
        'my-earnings-tips': resolve(__dirname, 'my-earnings/my-earnings-tips.html'),
        'my-earnings-tips-empty': resolve(__dirname, 'my-earnings/my-earnings-tips-empty.html'),
        'my-earnings-paid-posts': resolve(__dirname, 'my-earnings/my-earnings-paid-posts.html'),
        'my-earnings-paid-posts-empty': resolve(__dirname, 'my-earnings/my-earnings-paid-posts-empty.html'),
        'my-earnings-subscriptions': resolve(__dirname, 'my-earnings/my-earnings-subscriptions.html'),
        'my-earnings-subscriptions-empty': resolve(__dirname, 'my-earnings/my-earnings-subscriptions-empty.html'),
        'multi-user-account': resolve(__dirname, 'multi-user-account/multi-user-account.html'),
        'search': resolve(__dirname, 'search/search.html'),
        'partners': resolve(__dirname, 'partners/partners.html'),
        'partners-empty': resolve(__dirname, 'partners/partners-empty.html'),
        'fans': resolve(__dirname, 'fans/fans.html'),
        'become-a-creator': resolve(__dirname, 'become-a-creator/become-a-creator.html')
      }
    }
  }
})
