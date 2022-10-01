@php
    $content    = getContent('invite.content',true);
@endphp
@if($content)
    <section class="call-to-action-section pd-t-60 pd-b-60">
        <div class="container">
            <div class="call-to-action-area">
                <div class="row justify-content-between align-items-center ml-b-30">
                    <div class="col-lg-8 mrb-30">
                        <div class="call-to-action-content">
                            <h2 class="title">{{ __($content->data_values->heading) }}</h2>
                            <p>{{ __($content->data_values->paragraph) }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mrb-30">
                        <div class="call-to-action-btn">
                            <a href="{{ $content->data_values->button_link }}" class="cmn-btn">{{ __($content->data_values->button_text) }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endif
