<template>
    <div class="member-container">
      <button @click="prev" class="nav-button left">‹</button>
      <div class="viewport">
        <div class="member-wrapper" :style="{ transform: `translateX(-${currentOffset}px)` }">
          <div class="member-box" v-for="member in members" :key="member.id">
            <img :src="member.avatar" alt="头像" class="avatar" />
            <div class="nickname">{{ member.nickname }}</div>
            <a :href="member.link" target="_blank" class="link">访问链接</a>
          </div>
        </div>
      </div>
      <button @click="next" class="nav-button right">›</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MemberShowcase',
    data() {
      return {
        members: [
          { id: 1, avatar: 'avatars/Wzy.jpg', nickname: '😊组长', link: 'https://github.com/SimonWuZY' },
          { id: 2, avatar: 'avatars/Lyd.png', nickname: 'lyydsheep', link: 'https://lyydsheep.github.io/' },
          { id: 3, avatar: 'avatars/Saber.jpg', nickname: 'saber', link: 'https://emisaber.github.io/White_Box/' },
          { id: 4, avatar: 'avatars/Qym.png', nickname: 'Q', link: 'https://github.com/madaoQ' },
          { id: 5, avatar: 'avatars/Wyh.png', nickname: '无敌外援', link: 'https://github.com/Nanami14138' },
          { id: 6, avatar: 'avatars/Wkk.png', nickname: 'Sazerac-kk', link: 'https://sazerac-kk.github.io/' },
          { id: 7, avatar: 'avatars/Xwt.png', nickname: 'aoxuexinghuo', link: 'https://github.com/aoxuexinghuo' },
          { id: 7, avatar: '/logo.jpg', nickname: '期待您加入！', link: 'https://github.com/DLUT-TIC' },
          // 可以根据需要添加更多成员
        ],
        currentIndex: 0,
        memberBoxWidth: 166, // member-box的宽度加上间距 (150px宽度 + 16px间距)
        membersToShow: 2,
      };
    },
    computed: {
      currentOffset() {
        return this.currentIndex * this.memberBoxWidth;
      },
      maxIndex() {
        return Math.max(0, Math.ceil(this.members.length / this.membersToShow) - 1);
      },
    },
    methods: {
      next() {
        if (this.currentIndex < this.maxIndex) {
          this.currentIndex++;
        }
      },
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .member-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    position: relative;
  }
  
  .viewport {
    overflow: hidden;
    width: 830px; /* 显示4个成员，每个成员150px宽，加上16px的margin */
    position: relative;
  }
  
  .member-wrapper {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .member-box {
    flex: 0 0 150px;
    border: 1px solid #ddd;
    border-radius: 12px;
    margin: 0 8px;
    padding: 16px;
    text-align: center;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  }
  
  .member-box:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .avatar {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 12px;
  }
  
  .nickname {
    margin-top: 8px;
    font-weight: bold;
  }
  
  .link {
    display: block;
    margin-top: 12px;
    color: #007BFF;
    text-decoration: none;
  }
  
  .link:hover {
    text-decoration: underline;
    color: #0056b3;
  }
  
  /* 导航按钮样式 */
  .nav-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    padding: 8px;
    color: #007BFF;
  }
  
  .nav-button.left {
    left: -40px;
  }
  
  .nav-button.right {
    right: -40px;
  }
  
  .nav-button:hover {
    color: #0056b3;
  }
  
  /* 暗黑模式 */
  @media (prefers-color-scheme: dark) {
    .member-box {
      background-color: #333;
      color: #fff;
      border-color: #555;
    }
  
    .link {
      color: #4dabf7;
    }
  
    .link:hover {
      color: #82caff;
    }
  
    .nav-button {
      color: #4dabf7;
    }
  
    .nav-button:hover {
      color: #82caff;
    }
  }
  </style>
  