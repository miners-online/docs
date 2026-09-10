<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/41990982?v=4&size=64',
    name: 'Samuel Hulme',
    title: 'Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/samuelh2005' },
      { icon: 'lucide:link', link: 'https://samsblog.minersonline.uk' }
    ]
  }
]
</script>

# Our Team

<VPTeamMembers :members="members" />