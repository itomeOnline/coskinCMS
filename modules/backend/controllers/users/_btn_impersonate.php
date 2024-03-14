<?php if ($this->user->hasAccess('backend.impersonate_users')): ?>
    <div class="loading-indicator-container">
        <button
            type="button"
            data-request="onImpersonateUser"
            data-load-indicator="<?= e(trans('backend::lang.account.impersonate_working')) ?>"
            data-request-confirm="<?= e(trans('backend::lang.account.impersonate_confirm')) ?>"
            class="btn btn-danger wn-icon-user-secret"
            style="width: 100%; text-align: center"
        >
            <?= e(trans('backend::lang.account.impersonate')) ?>
        </button>
    </div>
<?php endif ?>