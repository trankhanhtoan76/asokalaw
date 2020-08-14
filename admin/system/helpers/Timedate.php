<?php

class Timedate
{
    static function toDbDatetime($datetimeInFormated)
    {
        if (empty($datetimeInFormated)) return null;
        $date = null;
        $dt = explode(' ', $datetimeInFormated);
        if ($GLOBALS['app']['config']['date_format'] == 'd/m/Y') {
            $dd = explode('/', $dt[0]);
            $date = $dd[2] . '-' . $dd[1] . '-' . $dd[0];
        }
        if (empty($dt[1])) {
            $date .= ' 00:00:00';
        } else {
            $t = explode(':', $dt[1]);
            $n = count($t);
            if ($n == 3) $date .= ' ' . $dt[1];
            elseif ($n = 2) $date .= ' ' . $dt[1] . ':00';
            else $date .= ' 00:00:00';
        }
        $date = gmdate("Y-m-d H:i:s", strtotime($date));
        return $date;
    }

    static function toDbDate($datetimeInFormated)
    {
        if (empty($datetimeInFormated)) return null;
        $date = null;
        if ($GLOBALS['app']['config']['date_format'] == 'd/m/Y') {
            $dd = explode('/', $datetimeInFormated);
            $date = $dd[2] . '-' . $dd[1] . '-' . $dd[0];
        }
        return $date;
    }
}