<template>
    <FriendTitle
            :img="img"
            :name="name"
            :link="link"
            class="title"/>
</template>

<script>
    import FriendTitle from "../FriendTitle.vue"

    export default {
        components: {
            FriendTitle
        },
        props:{
            link: {
                type: String,
                required: false,
            },
            img: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    }

</script>

<style scoped>
    .title{
        padding: 4px 8px;
        border-bottom: 1px solid #5181b8;
        background-color: #dee6ef;
    }
</style>