# Generated by Django 4.1.7 on 2023-03-30 23:18

import button.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("erc20", "0001_initial"),
        ("button", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="button",
            name="hex_color",
            field=models.CharField(
                blank=True,
                default="#000000",
                help_text="Hex color code, e.g. #000000",
                max_length=7,
                null=True,
                validators=[button.models.validate_hex_color],
            ),
        ),
        migrations.AddField(
            model_name="button",
            name="tokens",
            field=models.ManyToManyField(
                blank=True, help_text="Tokens to delegate", to="erc20.erc20"
            ),
        ),
        migrations.AlterField(
            model_name="button",
            name="ethereum_address",
            field=models.CharField(
                help_text="The Ethereum address to delegate to",
                max_length=256,
                validators=[button.models.validate_ethereum_address],
            ),
        ),
        migrations.AlterField(
            model_name="button",
            name="text",
            field=models.CharField(
                blank=True,
                default="Delegate",
                help_text="Text to display on button",
                max_length=256,
                null=True,
            ),
        ),
    ]
