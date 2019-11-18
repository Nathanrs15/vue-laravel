<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FocusResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return ['focusId' => $this->focusId, 'name' => $this->name, 'description' => $this->description];
    }
}
