<?php

namespace App\Console\Commands;

use App\Models\Url;
use Illuminate\Console\Command;

class DisableExpiredUrlsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:disable-expired-urls-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $expiredUrls = Url::where('expires_at', '<=', now()->toDateTimeString())
            ->where('active', 1)
            ->get();

        foreach ($expiredUrls as $expiredUrl) {
            $expiredUrl->active = 0;
            $expiredUrl->save();
        }

        return 'a';
    }
}
