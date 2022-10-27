
@component('mail::message')
# new post 
{{$post->title}}<br>
{{$post->content}}

 
@component('mail::button', ['url' => route('admin.posts.show', $post)])
visualizza dettagli
@endcomponent
 
Thanks,<br>
{{ config('app.name') }}
@endcomponent