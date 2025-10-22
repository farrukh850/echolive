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
        'payment-details': resolve(__dirname, 'settings/payment-details.html')
      }
    }
  }
})
