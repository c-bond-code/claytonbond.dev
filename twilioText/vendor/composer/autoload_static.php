<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6d95b621478cccc9f67a9ce1f65648e5
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twilio\\' => 7,
        ),
        'P' => 
        array (
            'Package\\Test\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twilio\\' => 
        array (
            0 => __DIR__ . '/..' . '/twilio/sdk/src/Twilio',
        ),
        'Package\\Test\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6d95b621478cccc9f67a9ce1f65648e5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6d95b621478cccc9f67a9ce1f65648e5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6d95b621478cccc9f67a9ce1f65648e5::$classMap;

        }, null, ClassLoader::class);
    }
}