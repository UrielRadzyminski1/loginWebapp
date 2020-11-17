<template>
    <div class="pt-20">
        <ul>
            <li>Name:{{$auth.user.name}}</li>
            <li>Email:</li>
            <li>Add new Article</li>

        </ul>

    </div>
  
</template>

<script>

export default {
    middleware:'logged',
}
</script>