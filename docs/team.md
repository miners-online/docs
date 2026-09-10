<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { getAuthors } from '../.vitepress/data.mts'

const members = getAuthors()
</script>

# Our Team

<VPTeamMembers :members="members" />